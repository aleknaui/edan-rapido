<?php

	// Este ajax debe guardar la información en la base de datos.
	//	 	Si no se le manda un form_id, significa que es un nuevo formulario, así que lo genera
	//		Debe retornar:
	//	 		success/error
	//			el form_id en que se insertó

	header("Content-Type: application/json");
	header("Access-Control-Allow-Origin: *");

	include('config.php');
	$response = array();

	function sendResponse($response){
		echo json_encode($response);
		exit(0);
	}

	$dbh = new PDO("mysql:host=".$config['dbhost'].";dbname=".$config['dbname'], $config['dbuser'], $config['dbpassword']);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	try{
		$dbh->beginTransaction();

		// Verificaciones:
		// Existe el usuario?
		$user = $dbh->prepare("SELECT * FROM users WHERE user_id = :user_id");
		$user->bindParam(":user_id", $_REQUEST['user_id']);
		$user->execute();
		if(!$user->fetch()){
			$response = array(
				"error" => "Usuario inválido."
			);
			sendResponse($response);
		}

		// Existe el tipo?
		$type = $dbh->prepare("SELECT * FROM form_types WHERE type_id = :type_id");
		$type->bindParam(":type_id", $_REQUEST['type_id']);
		$type->execute();
		if(!$type->fetch()){
			$response = array(
				"error" => "Tipo de formulario inválido."
			);
			sendResponse($response);
		}

		$form_id = $_REQUEST['form_id'];
		if($form_id < 0){
			$form_id = $dbh->prepare("SELECT MAX(form_id) AS form_id FROM form_submissions");
			$form_id->execute();
			$form_id = $form_id->fetch();
			$form_id = intval($form_id['form_id'])+1;
		}

		$insert = $dbh->prepare("INSERT INTO form_submissions(form_id, user_id, type_id, sub_date, sub_data) VALUES(:form_id, :user_id, :type_id, NOW(), :sub_data)");
		$insert->bindParam(":form_id", $form_id);
		$insert->bindParam(":user_id", $_REQUEST['user_id']);
		$insert->bindParam(":type_id", $_REQUEST['type_id']);
		$insert->bindParam(":sub_data", $_REQUEST['sub_data']);
		$insert->execute();

		$dbh->commit();
		$response['success'] = true;
		$response['form_id'] = $form_id;

	} catch(Exception $e){
		$dbh->rollback();
		$response = array(
			"error" => $e->getMessage(),
		);
	}

	sendResponse($response);
	// $insert = $dbh->prepare("INSERT INTO edan(json) VALUES(:json)");
	// $insert->bindValue(":json",$_REQUEST['json'],PDO::PARAM_STR);
	// if($insert->execute()) echo json_encode(array('success'=>'Formulario enviado exitosamente.'));
	// else echo json_encode(array('error'=>'Hubo un error en el envío del formulario.'));

package conred.edan;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.json.JSONTokener;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.os.StrictMode;

public class SenderService extends Service {
	private String serverAddress;
	private int phoneNumber;
	private int mId;
	private DatabaseHandler handler;

	@Override
	public IBinder onBind(Intent arg0) {
		return null;
	}

	@Override
	public void onCreate() {
		super.onCreate();

		handler = new DatabaseHandler(this.getApplicationContext()
				.getApplicationInfo().dataDir + "/app_database/file__0");
		
		serverAddress = handler.getVariableValue("server_address");
		phoneNumber = Integer.parseInt(handler.getVariableValue("phone_number"));
		
		mId = 0;

		StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder()
				.permitAll().build();
		StrictMode.setThreadPolicy(policy);
	}

	@Override
	public void onStart(Intent intent, int startId) {
		super.onStart(intent, startId);

		String message = "Envíos intentados:\n";
		boolean reschedule = false;
		
		ArrayList<FormTask> tasks = handler.getPendingJobs();
		for (FormTask task : tasks) {
			message += task.formName + ": ";
			if (ping()) {
				HttpClient httpclient = new DefaultHttpClient();
				HttpPost httppost = new HttpPost(serverAddress + "/submit.php");

				HttpResponse response;
				try {
					// Request parameters and other properties.
					List<NameValuePair> params = new ArrayList<NameValuePair>();
					params.add(new BasicNameValuePair("user_id", phoneNumber + ""));
					params.add(new BasicNameValuePair("type_id", task.typeID + ""));
					params.add(new BasicNameValuePair("sub_data", task.formData));
					params.add(new BasicNameValuePair("form_id", task.dataID + ""));
					httppost.setEntity(new UrlEncodedFormEntity(params));
					
					response = httpclient.execute(httppost);
					HttpEntity entity = response.getEntity();

					if (entity != null) {
						try {
							String jsonString = EntityUtils.toString(response
									.getEntity());
							JSONTokener tokener = new JSONTokener(jsonString);
							JSONObject jsonResponse = new JSONObject(tokener);
							if(jsonResponse.has("success")) {
								if (jsonResponse.getBoolean("success")) {
									handler.markAsSent(task.dataID);
									handler.popJob(task.dataID);
									message += "¡Envío exitoso!";
								} else {
									message += "Error: " + jsonResponse.getString("error");
								}
							} else {
								message += "Error: " + jsonResponse.getString("error");
							}
						} catch (Exception e) {
							e.printStackTrace();
							reschedule = true;
							message += "Error de envío. El sistema volverá a intentar el envío en 20 minutos";
						}
					}
				} catch (Exception e) {
					reschedule = true;
					message += "Error de red. El sistema volverá a intentar el envío en 20 minutos.";
				}
			} else {
				reschedule = true;
				message += "No se obtuvo respuesta del servidor. El sistema volverá a intentar el envío en 20 minutos.";
			}
			
			message += "\n";
			
		}
		
		if( reschedule ) {
			Calendar calendar = Calendar.getInstance();
			calendar.add(Calendar.SECOND, 40);
			
			Intent myIntent = new Intent(this, IntentReceiver.class);
			PendingIntent pendingIntent = PendingIntent.getBroadcast(this, 0,
			myIntent,0);
			
			AlarmManager alarmManager = (AlarmManager)
			getSystemService(Activity.ALARM_SERVICE);
			alarmManager.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(),
			pendingIntent);
		}

		if(tasks.size() > 0) {
			Notification notification = new Notification(R.drawable.ic_launcher,
					"", System.currentTimeMillis());
			Intent notificationIntent = new Intent(this.getApplicationContext(),
					EDANActivity.class);
			notificationIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP
					| Intent.FLAG_ACTIVITY_CLEAR_TOP);
			PendingIntent pendingNotificationIntent = PendingIntent.getActivity(
					this.getApplicationContext(), 0, notificationIntent,
					PendingIntent.FLAG_UPDATE_CURRENT);
			notification.flags |= Notification.FLAG_AUTO_CANCEL;
			notification.setLatestEventInfo(getApplicationContext(), "CONRED", message,
					pendingNotificationIntent);
			NotificationManager mNotificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
			mNotificationManager.notify(mId, notification);
		}
	}

	private boolean ping() {
		HttpClient httpclient = new DefaultHttpClient();
		HttpPost httppost = new HttpPost(serverAddress + "/ping.php");

		HttpResponse response;
		try {
			response = httpclient.execute(httppost);
			HttpEntity entity = response.getEntity();

			if (entity != null) {
				try {
					String jsonString = EntityUtils.toString(response
							.getEntity());
					JSONTokener tokener = new JSONTokener(jsonString);
					JSONObject jsonResponse = new JSONObject(tokener);
					if (jsonResponse.getBoolean("success")) {
						return true;
					} else {
						return false;
					}
				} catch (Exception e) {
					return false;
				}
			}
		} catch (Exception e) {
			return false;
		}

		return false;
	}

	@Override
	public void onDestroy() {
		super.onDestroy();
	}

}
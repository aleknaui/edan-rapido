package conred.edan;

import java.util.ArrayList;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

public class DatabaseHandler extends PhoneGapSQLiteOpenHelper {
	
	// Constantes de la BD
	private static final int DATABASE_VERSION = 1;
	private static final String DATABASE_NAME = "0000000000000001.db";
	//private static final String DATABASE_NAME = "edanRapido";
	
	// Nombres de tablas
	private static final String TABLE_FORM_DATA = "form_data";
	private static final String TABLE_PENDING_FORMS = "pending_forms";
	private static final String TABLE_VARIABLES = "variables";
	
	// Nombres de columnas
	private static final String COLUMN_DATA_ID = "data_id";
	private static final String COLUMN_TYPE_ID = "type_id";
	private static final String COLUMN_REV_LAST_SAVED = "rev_last_saved";
	private static final String COLUMN_REV_LAST_SENT= "rev_last_sent";
	private static final String COLUMN_FORM_DATA= "form_data";
	private static final String COLUMN_FORM_NAME = "form_name";
	private static final String COLUMN_VARIABLE_NAME = "variable_name";
	private static final String COLUMN_VARIABLE_VALUE = "variable_value";

	public DatabaseHandler(String path) {
		super(path, DATABASE_NAME, null, DATABASE_VERSION);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {}
	
	public String getVariableValue(String variableName) {
		SQLiteDatabase db = this.getReadableDatabase();
		
		Cursor cursor = db.query(TABLE_VARIABLES, new String[] {COLUMN_VARIABLE_VALUE}, COLUMN_VARIABLE_NAME+" = ?", new String[] {variableName}, null, null, null);
		String value = null;
		if(cursor != null && cursor.moveToFirst()) {
			value = cursor.getString(cursor.getColumnIndex(COLUMN_VARIABLE_VALUE));
		}
		
		db.close();
		return value;
	}
	
	public ArrayList<FormTask> getPendingJobs(){
		SQLiteDatabase db = this.getReadableDatabase();
		Cursor cursorA = db.query(TABLE_PENDING_FORMS, new String[] {COLUMN_DATA_ID},
				null, null, null, null, null, null);
		
		ArrayList<FormTask> tasks = new ArrayList<FormTask>();
	    if (cursorA != null  && cursorA.moveToFirst()){
	    	Cursor cursorB = db.query(TABLE_FORM_DATA, null, COLUMN_DATA_ID+"=?", new String[] {cursorA.getInt(cursorA.getColumnIndex(COLUMN_DATA_ID))+""}, null, null, null, null);
       	 	cursorB.moveToFirst();
       	 	tasks.add(new FormTask(
       			cursorB.getInt(cursorB.getColumnIndex(COLUMN_DATA_ID)),
       			cursorB.getInt(cursorB.getColumnIndex(COLUMN_TYPE_ID)),
       			cursorB.getString(cursorB.getColumnIndex(COLUMN_REV_LAST_SAVED)),
       			cursorB.getString(cursorB.getColumnIndex(COLUMN_REV_LAST_SENT)),
       			cursorB.getString(cursorB.getColumnIndex(COLUMN_FORM_DATA)),
       			cursorB.getString(cursorB.getColumnIndex(COLUMN_FORM_NAME))));
	        while(cursorA.moveToNext()){
	        	cursorB = db.query(TABLE_FORM_DATA, null, COLUMN_DATA_ID+"=?", new String[] {cursorA.getInt(cursorA.getColumnIndex(COLUMN_DATA_ID))+""}, null, null, null, null);
	        	cursorB.moveToFirst();
	        	tasks.add(new FormTask(
	        			cursorB.getInt(cursorB.getColumnIndex(COLUMN_DATA_ID)),
	        			cursorB.getInt(cursorB.getColumnIndex(COLUMN_TYPE_ID)),
	        			cursorB.getString(cursorB.getColumnIndex(COLUMN_REV_LAST_SAVED)),
	        			cursorB.getString(cursorB.getColumnIndex(COLUMN_REV_LAST_SENT)),
	        			cursorB.getString(cursorB.getColumnIndex(COLUMN_FORM_DATA)),
	        			cursorB.getString(cursorB.getColumnIndex(COLUMN_FORM_NAME))));
	        }
	    }
	    db.close();
		return tasks;
	}
	
	public void markAsSent(int id) {
		SQLiteDatabase db = this.getWritableDatabase();
		db.execSQL("UPDATE "+TABLE_FORM_DATA+" SET "+COLUMN_REV_LAST_SENT+"="+COLUMN_REV_LAST_SAVED+" WHERE "+COLUMN_DATA_ID+"="+id );
		db.close();
	}
	
	public void popJob(int id){
		SQLiteDatabase db = this.getWritableDatabase();
		db.delete(TABLE_PENDING_FORMS, COLUMN_DATA_ID+"=?", new String[] {id+""});
		db.close();
	}
	
}

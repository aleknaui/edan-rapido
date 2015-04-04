package conred.edan;

// Imports de Phonegap
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;



// Imports del AlarmManager
import java.util.Calendar;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;

public class ScheduledTask extends Plugin {

	@SuppressWarnings("deprecation")
	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.SECOND, 20);
		
		Context context = this.cordova.getContext();
		
		boolean alarmUp = (PendingIntent.getBroadcast(context, 0, 
		        new Intent("conred.edan.IntentReceiver"), 
		        PendingIntent.FLAG_NO_CREATE) != null);

		if (!alarmUp)
		{
			Activity mainActivity = this.cordova.getActivity();
			Intent myIntent = new Intent(mainActivity, IntentReceiver.class);
			PendingIntent pendingIntent = PendingIntent.getBroadcast(mainActivity, 0, myIntent, PendingIntent.FLAG_UPDATE_CURRENT);
			
			AlarmManager alarmManager = (AlarmManager) mainActivity.getSystemService(Activity.ALARM_SERVICE);
			alarmManager.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), pendingIntent);
		}
		
		return new PluginResult(PluginResult.Status.OK);
	}

}

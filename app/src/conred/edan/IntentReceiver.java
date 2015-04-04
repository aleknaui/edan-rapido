package conred.edan;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class IntentReceiver extends BroadcastReceiver{

	@Override
	public void onReceive(Context context, Intent intent) {
		Intent service1 = new Intent(context, SenderService.class);
		context.startService(service1);
	}
	
}

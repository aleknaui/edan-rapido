package com.simonmacdonald.cordova.plugins;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;

import android.content.Context;
import android.telephony.TelephonyManager;

public class TelephoneNumber extends Plugin {
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";
        try {
            if (action.equals("get")) {
            	this.cordova.getContext();
				TelephonyManager telephonyManager = (TelephonyManager)this.cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
            	result = telephonyManager.getLine1Number();
            	if (result != null) {
                   return new PluginResult(status, result);
                }
            }
            return new PluginResult(PluginResult.Status.ERROR);
        } catch (Exception e) {
            return new PluginResult(PluginResult.Status.ERROR);
        }
    }
}
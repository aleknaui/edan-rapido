package conred.edan;

public class FormTask {
	public int dataID;
	public int typeID;
	public String revLastSaved;
	public String revLastSent;
	public String formData;
	public String formName;
	
	public FormTask(int dataID, int typeID, String revLastSaved, String revLastSent, String formData, String formName){
		this.dataID = dataID;
		this.typeID = typeID;
		this.revLastSaved = revLastSaved;
		this.revLastSent = revLastSent;
		this.formData = formData;
		this.formName = formName;
	}
}

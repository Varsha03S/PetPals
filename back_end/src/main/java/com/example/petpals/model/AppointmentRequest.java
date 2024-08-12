package com.example.petpals.model;

public class AppointmentRequest {

	private String email;
	private String preferredDate;
	private String preferredTime;
	private Long veterinarianId;
	    private String name;
	    public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPreferredDate() {
			return preferredDate;
		}
		public void setPreferredDate(String preferredDate) {
			this.preferredDate = preferredDate;
		}
		public String getPreferredTime() {
			return preferredTime;
		}
		public void setPreferredTime(String preferredTime) {
			this.preferredTime = preferredTime;
		}
		public Long getVeterinarianId() {
			return veterinarianId;
		}
		public void setVeterinarianId(Long veterinarianId) {
			this.veterinarianId = veterinarianId;
		}
		public Long getDoctorId() {
			// TODO Auto-generated method stub
			return null;
		}
}

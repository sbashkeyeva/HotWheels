from django.urls import path
from api import views

# urlpatterns=[
#     path('task_lists/', views.task_lists),
#     #path('task_lists/',views.tasklists),
#     path('task_lists/<int:pk>/', views.tasklist_detail),
#     #path('task_lists/<int:pk>/tasks/', views.tasks),
# ]

urlpatterns = [
    path('doctors/', views.DoctorList.as_view()),
    path('doctors/<int:pk>/', views.Doctor_detail.as_view()),
    path('vdoctors/', views.ViewDoctorList.as_view()),
    path('patients/', views.PatientList.as_view()),
    path('patients/<int:pk>/', views.Patient_detail.as_view()),
    path('hospitals/', views.HospitalList.as_view()),
    path('hospitals/<int:pk>/', views.Hospital_detail.as_view()),
    path('vhospitals/', views.ViewHospitalList.as_view()),
    path('medicines/', views.MedicineList.as_view()),
    path('medicines/<int:pk>/', views.Medicine_detail.as_view()),
    path('vmedicines/', views.ViewMedicineList.as_view()),
    path('appointments/', views.AppointmentList.as_view()),
    path('appointments/<int:pk>/', views.Appointment_detail.as_view()),
    path('pappointments/', views.PostAppointmentList.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('signup/', views.signup),
]

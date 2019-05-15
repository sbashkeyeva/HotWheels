# from django.contrib import admin
# from api.models import TaskList, Task
#
# admin.site.register(Task)
#
#
# @admin.register(TaskList)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'created_by',)

from django.contrib import admin
from api.models import Doctor, Medicine, Patient, Hospital, Appointment

@admin.register(Doctor)
class RDoctor(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Medicine)
class RMedicine(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Patient)
class RPatient(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Hospital)
class RHospital(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Appointment)
class RAppointment(admin.ModelAdmin):
    list_display = ('id', 'doctor', 'patient')


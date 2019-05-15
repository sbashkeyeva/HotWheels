from rest_framework import serializers
from api.models import Hospital, Doctor, Patient, Appointment, Medicine
from django.contrib.auth.models import User

import datetime

class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    is_staff = serializers.BooleanField(required=False, default=False)
    password = serializers.CharField(write_only=True)
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'is_staff')


class HospitalSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    type = serializers.CharField()
    description = serializers.CharField()
    place = serializers.CharField()
    address = serializers.CharField()

    class Meta:
        model = Hospital
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    mobile = serializers.CharField()
    address = serializers.CharField()

    class Meta:
        model = Doctor
        fields = '__all__'


class PatienSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    mobile = serializers.CharField()
    address = serializers.CharField()

    class Meta:
        model = Patient
        fields = '__all__'

class MedicineSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    company = serializers.CharField()
    cost = serializers.IntegerField()
    type = serializers.CharField()
    description = serializers.CharField()

    class Meta:
        model = Medicine
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    type = serializers.CharField()
    description = serializers.CharField()

    class Meta:
        model = Appointment
        fields = '__all__'

    def create(self, validated_data):
        appointment = Appointment(**validated_data)
        appointment.save()
        return appointment



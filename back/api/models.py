from django.db import models
from django.contrib.auth.models import User
import datetime

class HospitalManager(models.Manager):
    def for_user(self, user):
        return self.filter(sender=user)

class Hospital(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.TextField()
    place = models.CharField(max_length=50)
    address = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'description': self.description,
            'place': self.place,
            'address': self.address
        }

class Doctor(models.Model):
    name = models.CharField(max_length=50)
    mobile = models.CharField(max_length=30)
    address = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'mobile': self.mobile,
            'address': self.address
        }



class Medicine(models.Model):
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    cost = models.IntegerField()
    type = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'company': self.company,
            'cost': self.cost,
            'type': self.type,
            'description': self.description,
        }

class Patient(models.Model):
    name = models.CharField(max_length=50)
    mobile = models.CharField(max_length=30)
    address = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'mobile': self.mobile,
            'address': self.address
        }

class Appointment(models.Model):
    type = models.CharField(max_length=100)
    description = models.TextField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patient')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='doctor')

    def __str__(self):
        return '{}: {}'.format(self.id, self.type)

    def to_json(self):
        return {
            'id': self.id,
            'description': self.description,
            'patient': self.patient.to_json(),
            'doctor': self.doctor.to_json()
        }


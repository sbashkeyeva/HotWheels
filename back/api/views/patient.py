from api.models import Doctor, Patient, Appointment, Hospital, Medicine
from api.serializers import UserSerializer, DoctorSerializer, PatienSerializer, AppointmentSerializer, MedicineSerializer, HospitalSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import authentication
from rest_framework import authtoken
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser


class PatientList(generics.ListCreateAPIView):
    permission_classes = (IsAdminUser, )
    queryset = Patient.objects.all()
    serializer_class = PatienSerializer
    http_method_names = ['get', 'post']


class Patient_detail(APIView):
    permission_classes = (IsAdminUser, )

    def get_object(selfs, pk):
        try:
            return Patient.objects.get(id=pk)
        except Patient.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        patient = self.get_object(pk)
        serializer = PatienSerializer(patient)
        return Response(serializer.data)

    def put(self, request, pk):
        patient = self.get_object(pk)
        serializer = PatienSerializer(instance=patient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        patient = self.get_object(pk)
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
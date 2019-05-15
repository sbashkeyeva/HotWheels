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



class DoctorList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    http_method_names = ['get', 'post']

class Doctor_detail(APIView):
    def get_object(selfs, pk):
        try:
            return Doctor.objects.get(id=pk)
        except Doctor.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        doctor = self.get_object(pk)
        serializer = DoctorSerializer(doctor)
        return Response(serializer.data)


    def put(self, request, pk):
        doctor = self.get_object(pk)
        serializer = DoctorSerializer(instance=doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request, pk):
        doctor = self.get_object(pk)
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PatientList(generics.ListCreateAPIView):
    permission_classes = (IsAdminUser, )
    queryset = Patient.objects.all()
    serializer_class = PatienSerializer
    http_method_names = ['get', 'post']


class Patient_detail(APIView):
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



class HospitalList(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        hospitalList = Hospital.objects.all()
        serializer = HospitalSerializer(hospitalList, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = HospitalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class Hospital_detail(APIView):
    def get_object(selfs, pk):
        try:
            return Hospital.objects.get(id=pk)
        except Hospital.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        hospital = self.get_object(pk)
        serializer = HospitalSerializer(hospital)
        return Response(serializer.data)


    def put(self, request, pk):
        hospital = self.get_object(pk)
        serializer = HospitalSerializer(instance=hospital, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request, pk):
        hospital = self.get_object(pk)
        hospital.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class MedicineList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    http_method_names = ['get', 'post']


class Medicine_detail(APIView):
    def get_object(selfs, pk):
        try:
            return Medicine.objects.get(id=pk)
        except Medicine.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        doctor = self.get_object(pk)
        serializer = MedicineSerializer(doctor)
        return Response(serializer.data)


    def put(self, request, pk):
        doctor = self.get_object(pk)
        serializer = MedicineSerializer(instance=doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request, pk):
        doctor = self.get_object(pk)
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AppointmentList(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        doctorList = Appointment.objects.filter(user=self.user)
        serializer = AppointmentSerializer(doctorList, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class Appointment_detail(APIView):
    def get_object(selfs, pk):
        try:
            return Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        doctor = self.get_object(pk)
        serializer = AppointmentSerializer(doctor)
        return Response(serializer.data)


    def put(self, request, pk):
        doctor = self.get_object(pk)
        serializer = AppointmentSerializer(instance=doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request, pk):
        doctor = self.get_object(pk)
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


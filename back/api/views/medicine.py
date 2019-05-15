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


class ViewMedicineList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    http_method_names = ['get']

class MedicineList(generics.ListCreateAPIView):
    permission_classes = (IsAdminUser,)
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



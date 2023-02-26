from rest_framework import serializers
from .models import CTScan
 
class CTScanSerializer(serializers.ModelSerializer): 
    class Meta:
        model = CTScan
        fields = '__all__'
        
class ResultSerializer(serializers.ModelSerializer): 
    class Meta:
        model = CTScan
        fields = ['result']       
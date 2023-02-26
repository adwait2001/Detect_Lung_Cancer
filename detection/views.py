from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CTScan
from .serializer import CTScanSerializer,ResultSerializer
 
@api_view(['GET', 'POST'])
def Ctscan_list(request): 
    if request.method == 'GET':
        ctscan = CTScan.objects.all() 
        serializer = CTScanSerializer(ctscan, many=True)
        return Response(serializer.data) 
    elif request.method == 'POST':
        serializer = CTScanSerializer(data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def Ctscan_result(request,pk):
    if request.method == 'GET':
        ct_obj = CTScan.objects.get(pk=pk)
        res = predict_result(ct_obj.ct_scan)
        result = {
            "result" :  res
        }
        serializer = CTScanSerializer(ct_obj,data=result,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getResult(request,pk):
    if request.method == 'GET':
        ct_obj = CTScan.objects.get(pk=pk)
        serializer = ResultSerializer(ct_obj)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def predict_result(ct_scan_path):
    # Ml computations here
    return str(ct_scan_path)
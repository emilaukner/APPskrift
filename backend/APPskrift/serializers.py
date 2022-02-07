from rest_framework import serializers
from .models import APPSkrift

class APPSkriftSerializer(serializers.ModelSerializer):
    class Meta:
        model = APPSkrift
        fields = ('id', 'title', 'description', 'completed')
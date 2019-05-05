from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('materials/', views.MaterialList.as_view()),
    path('materials/<int:pk>', views.MaterialDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)

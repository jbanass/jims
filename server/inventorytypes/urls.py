from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('inventorytypes/', views.InventoryTypeList.as_view()),
    path('inventorytypes/<int:pk>/', views.InventoryTypeDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)

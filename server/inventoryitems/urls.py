from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('inventoryitems/', views.InventoryItemList.as_view()),
    path('inventoryitems/<int:pk>/', views.InventoryItemDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)

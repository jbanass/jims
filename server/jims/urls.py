from django.conf.urls import url, include
from django.urls import path

urlpatterns = [
    path('', include('companies.urls')),
    path('', include('users.urls')),
    path('', include('vendors.urls')),
    path('', include('inventorytypes.urls')),
    path('', include('inventoryitems.urls')),
    path('', include('inventoryitemcomponents.urls')),
    path('', include('materials.urls'))
]

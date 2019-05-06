from django.conf.urls import url, include
from django.urls import path

urlpatterns = [
    path('api/v1/', include('companies.urls')),
    path('api/v1/', include('users.urls')),
    path('api/v1/', include('vendors.urls')),
    path('api/v1/', include('inventorytypes.urls')),
    path('api/v1/', include('inventoryitems.urls')),
    path('api/v1/', include('inventoryitemcomponents.urls')),
    path('api/v1/', include('materials.urls'))
]

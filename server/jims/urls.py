from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers

from companies.views import CompanyViewSet
from users.views import UserViewSet
from vendors.views import VendorViewSet
from inventorytypes.views import InventoryTypesViewSet
from inventoryitems.views import InventoryItemsViewSet
from materials.views import MaterialViewSet
from inventoryitemcomponents.views import InventoryItemComponentViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register('companies', CompanyViewSet)
router.register('users', UserViewSet)
router.register('vendors', VendorViewSet)
router.register('inventory-types', InventoryTypesViewSet)
router.register('inventory-items', InventoryItemsViewSet)
router.register('materials', MaterialViewSet)
router.register('inventory-item-components', InventoryItemComponentViewSet)

# urlpatterns = [
#     path('api/v1/', include('companies.urls')),
#     path('api/v1/', include('users.urls')),
#     path('api/v1/', include('vendors.urls')),
#     path('api/v1/', include('inventorytypes.urls')),
#     path('api/v1/', include('inventoryitems.urls')),
#     path('api/v1/', include('inventoryitemcomponents.urls')),
#     path('api/v1/', include('materials.urls'))
# ]

urlpatterns = [
    url(r'^api/v1/', include(router.urls))
]

angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $ionicPopup) {

$scope.empDetails = [
{
  "id":"1",
  "pName":"TV",
  "pPrice":"20000",
  "pDept":"IT"
},
{
  "id":"2",
   "pName":"Radio",
  "pPrice":"30000",
  "pDept":"IT"
}
];
  $scope.openAdd = function () {
       $scope.emp = {};

        $scope.popup = $ionicPopup.show({
            'templateUrl': 'addPopup.html',
            'title': 'Add Emp',
            'scope': $scope
        });
    }
    $scope.addEmp = function(emp){
      if(emp){
        if(emp.id == undefined || emp.id == ''  || emp.pName == undefined || emp.pName == ''  || emp.pPrice == undefined || emp.pPrice == ''  || emp.pDept == undefined || emp.pDept == '')
        {
          alert("Please specify all details!!!");
        }
        else{
          console.log(emp);
            $scope.empDetails.push(emp);
          $scope.popup.close();
        }
      }
      else{
        alert("Please enter the all details");
      }
      }
  
    
    $scope.closePopup = function(){
     // $scope.popup.splice(chats.indexOf(chat), 1)
           $scope.popup.close();
    }

$scope.delUpdate = function (e) {
  $scope.empDataAssign = e;
  console.log(e);
        $scope.popup2 = $ionicPopup.show({
            'templateUrl': 'addPopup2.html',
            'title': 'Please confirm',
            'scope': $scope
        });
    }
$scope.del = function(){
  $scope.empDetails.splice($scope.empDetails.indexOf($scope.empDataAssign), 1);
             $scope.popup2.close();
}
$scope.edit = function(){
               $scope.popup2.close();            
                 $scope.popup3 = $ionicPopup.show({
                  'templateUrl': 'addPopup3.html',
                  'title': 'Update Emp',
                  'scope': $scope
              });
$scope.empUpdate = $scope.empDataAssign;
}
$scope.updateEmp = function(empUpdate){
    $scope.empDetails.splice($scope.empDetails.indexOf(empUpdate), 1);

      if(empUpdate){
        if(empUpdate.id == undefined || empUpdate.id == ''  || empUpdate.pName == undefined || empUpdate.pName == ''  || empUpdate.pPrice == undefined || empUpdate.pPrice == ''  || empUpdate.pDept == undefined || empUpdate.pDept == '')
        {
          alert("Please specify all details!!!");
        }
        else{
          console.log(empUpdate);
            $scope.empDetails.push(empUpdate);
          $scope.popup3.close();
        }
      }
      else{
        alert("Please enter the all details");
      }
    }
    $scope.closePopup3 = function(){
     // $scope.popup.splice(chats.indexOf(chat), 1)
           $scope.popup3.close();
    }
 $scope.closePopup2 = function(){
     // $scope.popup.splice(chats.indexOf(chat), 1)
           $scope.popup2.close();
    }
   $scope.orderByKey = 'id';
    $scope.orderBy = function(o){
      $scope.orderByKey = o;
      console.log(o);
    }
})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('pDetailsCtrl', function($scope, $stateParams, Chats) {
})
.controller('AccountCtrl', function($scope, $cordovaFlashlight, $cordovaImagePicker, $cordovaCamera) {
$scope.toggle = function(){
   $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
}
$scope.pick =function(){
 var options = {
      quality: 100,
     destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
    correctOrientation:true
    };


     $cordovaCamera.getPicture(options).then(function(imageURI) {
      $scope.img  = imageURI;
    }, function(err) {
    });
}
});

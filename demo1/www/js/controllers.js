angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $ionicPopup) {

$scope.empDetails = [
{
  "id":"1",
  "name":"Aishwarya Naik",
  "mobile":1234567890,
  "email":"a@a.com"
},
{
  "id":"2",
  "name":"Twinkle Yadav",
  "mobile":1234567890,
  "email":"t@t.com"
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
        if(emp.id == undefined || emp.id == ''  || emp.name == undefined || emp.name == ''  || emp.mobile == undefined || emp.mobile == ''  || emp.email == undefined || emp.email == '')
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
        if(empUpdate.id == undefined || empUpdate.id == ''  || empUpdate.name == undefined || empUpdate.name == ''  || empUpdate.mobile == undefined || empUpdate.mobile == ''  || empUpdate.email == undefined || empUpdate.email == '')
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

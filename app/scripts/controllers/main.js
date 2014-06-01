'use strict';

angular.module('globApp')
  .controller('MainCtrl', function ($scope, $http) {

    function $(id) {
      /*global document*/
      return document.getElementById(id);
    }
    /*global plupload*/
    var uploader = new plupload.Uploader({
      /* jshint camelcase: false */
      runtimes: 'html5',
      drop_element: 'drop-target',
      browse_button: 'drop-target',
      max_file_size: '10mb',
      upload: 'upload.php'
    });

    uploader.bind('Init', function () {
      if (uploader.features.dragdrop) {
        $('debug').innerHTML = '';

        var target = $('drop-target');

        target.ondragover = function (event) {
          event.dataTransfer.dropEffect = 'copy';
        };

        target.ondragenter = function () {
          this.className = 'dragover';
        };

        target.ondragleave = function () {
          this.className = '';
        };

        target.ondrop = function () {
          this.className = '';
        };
      }
    });

    uploader.bind('FilesAdded', function (up, files) {
      var result = _.pluck(files, 'relativePath')
    });

    setTimeout(function() {
      uploader.init();
    }, 100);

    var data = [
      'README.md',
      '.hiddenfile',
      'index.html',
      'src',
      'src/app.js',
      'src/data.js',
      'src/.hiddenfile',
      'src/lib',
      'src/lib/angular.js',
      'img',
      'img/logo.png'
    ];

    function createTree(files) {
      var result = [];
      var lookupHelper = {};
      var fileList = createFileObject(files);

      fileList.forEach(function (file) {
        var item = {};
        item.label = file.name;
        item.data = file;

        if (file.parentPath) {
          var parentItem = lookupHelper[file.parentPath];
          if (!parentItem.children) {
            parentItem.children = [];
          }
          parentItem.children.push(item);
        } else {
          result.push(item);
        }
        lookupHelper[file.path] = item;
      });

      return result;
    }

    function createFileObject(files) {
      var result = [];
      files.forEach(function (file) {
        var item = {};
        var path = file.replace(/[^\/]*$/, '');
        if (path) {
          item.parentPath = path.slice(0, -1);
        }
        item.path = file;
        item.name = file.replace(/^.*[\\\/]/, '');
        result.push(item);
      });
      return result;
    }

    $scope.treeData = createTree(data);
    $scope.glob = {
      pattern: '**/*.js',
      options: {
        dot: true
      }
    };

    $scope.submitGlob = function ($event) {
      if (!$scope.glob.pattern.length) {
        $event.preventDefault();
        return;
      }
      console.log(JSON.stringify($scope.glob.pattern));

      $scope.globResult = minimatch.match(data, $scope.glob.pattern, $scope.glob.options);
    };

    $scope.repo = 'github.com/yeoman/generator';
    $scope.githubImport = function () {

      var repoName = $scope.repo.split('github.com/')[1];
      var serviceUrl = 'https://api.github.com/repos/' + repoName + '/git/trees/master?recursive=1';
      $scope.loadingTree = true;
      $scope.treeData = [];

      $http({
        method: 'GET',
        url: serviceUrl
      }).success(function (response) {
        data = _.pluck(response.tree, 'path');
        $scope.treeData = createTree(data);
        $scope.loadingTree = false;
      });
    };

  });

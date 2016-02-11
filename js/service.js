(function() {
  'use strict';
	angular
		.module('app')
		.service('resumeService',function($http, $q){
			var person = 'data/prashant.json';
			var resume;

			return {
	      getSkills: getSkills,
	      getSummary: getSummary,
	      getExperiences: getExperiences,
	      getEducation: getEducation
	    };

			function getResume(){
				var deferred = $q.defer();
				if(resume) {
					deferred.resolve();
				}
				$http.get(person).then(function(resp){
					if(resp){
						resume = resp.data;
					 	deferred.resolve("resume loaded");
					}else {
						console.error("resume not found");
			      deferred.reject("No resume found");
			    }
				});  
				return deferred.promise;
			}

			function getSkills(){
				var deferred = $q.defer();
			  getResume().then(function(){
					deferred.resolve(resume.topSkills);
			  });
				return deferred.promise;
			};

			function getEducation(){
				var deferred = $q.defer();
			  getResume().then(function(){
					deferred.resolve(resume.education);
			  });
				return deferred.promise;
			};

			function getSummary(){
				var deferred = $q.defer();
			  getResume().then(function(){
					deferred.resolve(resume.summary);
			  });
				return deferred.promise;
			};

			function getExperiences(){
				var deferred = $q.defer();
			  getResume().then(function(){
					deferred.resolve(resume.experiences);
			  });
				return deferred.promise;
			};
		});
})(); 
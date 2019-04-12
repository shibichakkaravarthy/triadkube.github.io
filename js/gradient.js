var granimInstance = new Granim({
   element: '#banner',
   name: 'granim',
   opacity: [1, 1],
   states : {
       "default-state": {
           gradients: [
               ['#2193b0', '#6dd5ed'],
               ['#0F2027', '#2C5364'],
               ['#2c3e50', '#3498db'],
               ['#1CB5E0', '#000046']
           ],

           transitionSpeed: 2000
       }
   }
});
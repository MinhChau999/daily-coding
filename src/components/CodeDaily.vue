<template>
   <div class="container-fluid mt-4">
      <div class="card">
         <div class="card-body" style="min-height: 600px">
            <h4 class="header-title"> {{challenges[$route.params.id-1].title }}</h4>
            <div v-for="content in splitJoin(challenges[$route.params.id-1].content)" :key="content">
               <div class="text-muted mb-2"> {{content}} </div>
            </div>
            <div class="text-muted mb-2"> Example: </div>
            <div v-for="example in splitJoin(challenges[$route.params.id-1].example)" :key="example">
               <code> {{example}} </code>
            </div>
            <ul class="nav nav-tabs nav-bordered mb-3">
               <li class="nav-item">
                  <a href="#default-tabs-preview" data-toggle="tab" aria-expanded="false" class="nav-link active">
                        Preview
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#default-tabs-code" data-toggle="tab" aria-expanded="true" class="nav-link">
                        Code
                  </a>
               </li>
            </ul>
            <div class="tab-content">
               <div class="tab-pane show active" id="default-tabs-preview">
                  review function
                  <br>
                  <button @click="solutionProject" class="mt-2">Test code</button>                                 
               </div> <!-- end preview-->
            
               <div class="tab-pane" id="default-tabs-code">
                  <pre class="mb-0">                                                    
                     <span class="html escape hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav nav-tabs mb-3"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-item"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span> <span class="hljs-attr">data-toggle</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-link"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mdi mdi-home-variant d-md-none d-block"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-none d-md-block"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-item"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#profile"</span> <span class="hljs-attr">data-toggle</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-link active"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mdi mdi-account-circle d-md-none d-block"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-none d-md-block"</span>&gt;</span>Profile<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-item"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#settings"</span> <span class="hljs-attr">data-toggle</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-link"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mdi mdi-settings-outline d-md-none d-block"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-none d-md-block"</span>&gt;</span>Settings<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tab-content"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tab-pane"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"home"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tab-pane show active"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"profile"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tab-pane"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"settings"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
                  </pre> <!-- end highlight-->
               </div> <!-- end preview code-->
            </div>
         </div> <!-- end card-body -->
      </div> <!-- end card-->
   </div>
 </template>
 
 <script>
   export default {
      name: 'CodeDaily',
      props: {
         challenges: {
            type: Object,
         }
      },
      methods: {
         splitJoin(theText){
            return theText.split('. ');
         },
         solutionProject() {
            let arr = this.randomArray1();
            console.log(arr);

         },
         randomArray1(){
            const MIN = 3;
            const MAX = 100;
            let arrRandom =[];
            let numberRandom = Math.floor(Math.random() * (MAX-MIN)) + MIN;
            for (let i = 0; i < numberRandom; i++) {
               arrRandom[i] = Math.floor(Math.random() * (MAX)) ;
            }
            return arrRandom;
         }
      } 
   }
 </script>
 
 <style>
 
 </style>
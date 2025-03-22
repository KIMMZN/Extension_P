
 $(document).ready(function() {
    console.log("check1")
    $('#imageInput').on('change', function(event) {
      console.log("check2")
      const file = this.files [0];  // jQuery 이벤트 핸들러에서 this는 DOM 요소를 가리킴
      if(file) {
        console.log("check2.1")
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log("check2.2")
        reader.onload = function(e) {
          console.log("check2.3")
          $('#preview').attr('src', e.target.result).show();
          console.log("check3")
        }
      }else {
        console.log("else1")
      }
     });
  });


//   document.getElementById('imageInput').addEventListener('change', function(event) {
//     const file = event.target.files[0]; // 사용자가 선택한 첫 번째 파일
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const imgElement = document.getElementById('preview');
//             imgElement.src = e.target.result; // 이미지 데이터 URL
//             imgElement.style.display = 'block'; // 이미지 표시
//         };
//         reader.readAsDataURL(file); // 파일을 데이터 URL로 변환
//     }
// });

// document.getElementById('imageInput'): 순수 JavaScript에서 ID가 "imageInput"인 DOM 요소를 선택하는 방식임.

// $('#imageInput'): jQuery에서 ID가 "imageInput"인 요소를 jQuery 객체로 감싸서 선택하는 방식임.

// .addEventListener('change', function(event) { ... });: 순수 JavaScript에서 "change" 이벤트 리스너를 추가하는 메서드임.

// .on('change', function(event) { ... });: jQuery에서 "change" 이벤트 핸들러를 추가하는 메서드임.

// event.target.files [0]: 순수 JavaScript 이벤트 객체에서 사용자가 선택한 첫 번째 파일에 접근하는 방식임.

// this.files [0]: jQuery 이벤트 핸들러 내에서 this 키워드는 이벤트가 발생한 DOM 요소 (#imageInput)를 가리키므로, this.files를 통해 파일 목록에 접근할 수 있음.

// document.getElementById('preview'): 순수 JavaScript에서 ID가 "preview"인 DOM 요소를 선택하는 방식임.

// $('#preview'): jQuery에서 ID가 "preview"인 요소를 jQuery 객체로 감싸서 선택하는 방식임.

// .src = e.target.result;: 순수 JavaScript에서 <img> 요소의 src 속성을 설정하는 방식임.

// .attr('src', e.target.result): jQuery에서 선택한 요소의 속성 값을 설정하는 메서드임.

// .style.display = 'block';: 순수 JavaScript에서 <img> 요소의 display 스타일을 변경하는 방식임.

// .show(): jQuery에서 선택한 요소를 보이도록 display 스타일을 변경하는 메서드임 (display: inline으로 설정되어 있으므로 inline으로 표시됨).

// $(document).ready(function() { ... });: jQuery에서 DOM이 완전히 로드된 후에 코드를 실행하도록 하는 래퍼 함수임. 순수 JavaScript에서는 DOMContentLoaded 이벤트를 사용하여 동일한 동작을 구현할 수 있음
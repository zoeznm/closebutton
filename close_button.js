//빨간 버튼을 누르면 창 사라지기
// * 이상 없음
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card_1, .card_2, .card_3, .card_4, .card_5, .card_6');
    card.style.display = 'none';
  });
});
//카드를 누르면 맨 앞으로 나오기
// * 이상 없음
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card_1, .card_2, .card_3, .card_4, .card_5, .card_6');
  let zIndexCounter = 1;

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      // 클릭된 카드를 맨 앞으로 올리기
      card.style.zIndex = zIndexCounter++;
      
      // 이벤트 전파 막기
      event.stopPropagation();
    });
  });
});

//초록 버튼을 누르면 창 커지기
// * 완료
const openButtons = document.querySelectorAll('.open');
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card_1, .card_2, .card_3, .card_4, .card_5, .card_6');
    card.style.width="1200px";
    card.style.height="700px";

    const windowWidth = window.innerWidth;
    const cardWidth = card.offsetWidth;

    const leftPosition = (windowWidth - cardWidth) / 5;

    card.style.left = leftPosition + "px";
    
  });
});

//주황색 버튼 누르면 다시 원래로 돌아가기
// * 완료
document.addEventListener('DOMContentLoaded', function() {
  const foldButtons = document.querySelectorAll('.fold');
  foldButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card_1, .card_2, .card_3, .card_4, .card_5, .card_6');
      card.style.width = ''; // 원래 크기로 되돌림
      card.style.height = ''; // 원래 크기로 되돌림
      card.style.left = ''; // 원래 위치로 되돌림
      card.style.top = ''; // 원래 위치로 되돌림
      card.style.transform = ''; // 원래 위치로 되돌림
      card.style.zIndex = ''; // z-index 초기화하여 원래 순서로 돌아감
    });
  });
});

//마우스로 card들 움직이기
// * 완료
document.addEventListener('DOMContentLoaded', function() {
  let isDragging = false;
  let currentCard = null;
  let offsetX = 0;
  let offsetY = 0;

  const cards = document.querySelectorAll('.card_1, .card_2, .card_3, .card_4, .card_5, .card_6');
  cards.forEach(card => {
    card.addEventListener('mousedown', (e) => {
      isDragging = true;
      currentCard = card;
      offsetX = e.clientX - currentCard.getBoundingClientRect().left;
      offsetY = e.clientY - currentCard.getBoundingClientRect().top;
      currentCard.style.zIndex = '9999'; // 가장 앞으로 이동
    });
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      currentCard.style.left = x + 'px';
      currentCard.style.top = y + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    currentCard = null;
    offsetX = 0;
    offsetY = 0;
  });
});


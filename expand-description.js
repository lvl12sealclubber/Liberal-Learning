
<script>
const cardButtons = document.querySelectorAll('.course-description');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  // const card = button.closest('.facility-item-container') || button.previousElementSibling;

  button.classList.toggle('expanded-description');
}


cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));
</script>

<style>
  .course-description{font-size: 20px;
line-height: 30px;
height: 300px;
overflow: hidden;}
</style>
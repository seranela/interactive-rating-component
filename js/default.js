function submitRating() {
  const userRateChoice = parseInt(document.querySelector('input[name="rating"]:checked').value);
  const rateAmount = document.getElementById('rate-amount');
  const rateForm = document.getElementById('rate-form');
  const thankYouCard = document.getElementById('thankyou-card');

  rateAmount.innerHTML = userRateChoice;

  rateForm.style.display = 'none';
  rateForm.setAttribute('aria-hidden', true);

  thankYouCard.style.display = 'flex';
  thankYouCard.setAttribute('aria-hidden', false);

  return false;
}
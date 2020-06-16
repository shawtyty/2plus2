let result;
const resultDiv = document.createElement('div');

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const button = document.createElement('button');

const error = document.createElement('div');
const error2 = document.createElement('div');

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);
document.body.insertBefore(error, input2);
document.body.insertBefore(error2, button);

input1.id = '1';
input2.id = '2';
resultDiv.id = 'result';
button.textContent = 'evaluate';
error.textContent = 'invalid input';
error.style.display = 'none';
error2.textContent = 'invalid input';
error2.style.display = 'none';

button.onclick = function() {
  (error.style.display = 'none'), (error2.style.display = 'none');
  resultDiv.textContent = '';

  if (!isFinite(input1.value)) {
    error.style.display = 'block';
  }
  if (!isFinite(input2.value)) {
    error2.style.display = 'block';
  } else if (isFinite(input1.value) && isFinite(input2.value)) {
    result = Number(input1.value) + Number(input2.value);
    resultDiv.textContent = result;
    document.body.appendChild(resultDiv);
  }
};

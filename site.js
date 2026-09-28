/* «К кому записаться?» — подсказка по списку специалистов клиники (с карточки на Яндекс Картах). Не диагноз. */
(function () {
  'use strict';
  var DOCS = {
    'therapist-plan': { who: 'Терапевт', why: 'Вакцинация, чипирование и плановый осмотр начинаются с терапевта.', form: 'Вакцинация или чипирование' },
    therapist: { who: 'Терапевт', why: 'Первым делом — к терапевту. Если нужно, он назначит УЗИ, рентген или анализы прямо в клинике.', form: 'Терапевт' },
    derma: { who: 'Дерматолог и аллерголог', why: 'Зуд, выпадение шерсти и проблемы с кожей смотрит дерматолог.', form: 'Дерматолог и аллерголог' },
    ortho: { who: 'Ортопед или невролог', why: 'Хромота и боли в лапах — к ортопеду, спина и координация — к неврологу. Администратор подскажет по телефону.', form: 'Ортопед' },
    cardio: { who: 'Кардиолог или терапевт', why: 'Одышка и кашель бывают связаны с сердцем — в клинике есть кардиолог и УЗИ. Если не уверены, начните с терапевта.', form: 'Кардиолог' },
    surgeon: { who: 'Хирург', why: 'Кастрацию, стерилизацию и операции делает хирург клиники.', form: 'Хирург' },
    lab: { who: 'Диагностика', why: 'В клинике делают УЗИ, рентген, общий анализ крови и мочи.', form: 'Анализы' },
    endo: { who: 'Эндокринолог', why: 'Гормональные нарушения ведёт эндокринолог.', form: 'Эндокринолог' }
  };
  var box = document.getElementById('answer');
  var opts = document.querySelectorAll('[data-doc]');
  if (!box) return;

  opts.forEach(function (b) {
    b.addEventListener('click', function () {
      var d = DOCS[b.getAttribute('data-doc')];
      opts.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      box.innerHTML =
        '<p class="answer__label">Вам к специалисту:</p>' +
        '<p class="answer__who"></p><p class="answer__why"></p>' +
        '<div class="answer__btns"><a class="btn btn--teal" href="tel:+375297004770">Позвонить и записаться</a>' +
        '<a class="btn btn--line" href="#form" data-fill>Оставить заявку</a></div>';
      box.querySelector('.answer__who').textContent = d.who;
      box.querySelector('.answer__why').textContent = d.why;
      box.querySelector('[data-fill]').addEventListener('click', function () {
        var sel = document.getElementById('f-doc');
        if (sel) sel.value = d.form;
      });
    });
  });
})();

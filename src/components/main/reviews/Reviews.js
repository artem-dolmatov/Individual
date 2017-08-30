import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './Reviews.css';

class Reviews extends Component {
  render() {
    return (
        <Grid container spacing={0} className='reviewsBg'>
          <div className='reviewsH2'>
            <h2>Отзывы</h2>
          </div>
          <Grid item sm={6} xs={12}>
            <div className='reviewsVkDiv'>
              <div className='reviewsVkHeader'>
                <a href='https://vk.com/id66589131'>
                  <img className='reviewsVkImg' src='https://pp.userapi.com/c836321/v836321068/5eb24/u-OxwOVX7nU.jpg'/>
                </a>
                <a className='reviewsA' href='https://vk.com/id66589131'>
                  <p className='reviewsVkName'>Татьяна Лылова</p>
                </a>
                <a className='reviewsA' href='https://vk.com/maxautoschool?w=wall154421750_1241'>
                  <p className='reviewsVkDate'>27 авг в 15:38</p>
                </a>
              </div>
              <p className='reviewsVkText'>Хочу выразить искреннюю благодарность Максиму Долматову, за подготовку и обучение водительскому мастерству. За те часы, которые даются для освоения основных правил и навыков вождения, конечно, обучиться вождению в совершенстве не возможно. Но Максим творит невероятное. Максим чудо-преподаватель, огромный молодец и мастер своего дела. Найдёт индивидуальный подход к каждому будущему водителю. Очень приятный в общении, тактичный, с хорошим чувством юмора. Он действительно любит свою работу (и нас учеников) и вкладывает всю душу, не просто отработав свой рабочий день, старается дать максимальные знания и навыки, очень понятно, доступно, буквально разжёвывая, подкрепляя реальными примерами.
Максим, огромное спасибо за Ваш профессионализм и терпение!!!</p>
            </div>
            <div className='reviewsVkDiv'>
              <div className='reviewsVkHeader'>
                <a href='https://vk.com/id317357029'>
                  <img className='reviewsVkImg' src='https://pp.userapi.com/c841134/v841134066/1bc6b/8MPiqo6p-yQ.jpg'/>
                </a>
                <a className='reviewsA' href='https://vk.com/id317357029'>
                  <p className='reviewsVkName'>Ольга Морокова</p>
                </a>
                <a className='reviewsA' href='https://vk.com/maxautoschool?w=wall154421750_1159'>
                  <p className='reviewsVkDate'>10 мар 2016</p>
                </a>
              </div>
              <p className='reviewsVkText'>Спасибо за полученные навыки вождения, спокойному ,терпеливому инструктору Артему и замечательному инструктору по теории Максиму за отличный и понятный курс обучения!
Отдельное спасибо за моральную поддержку на экзамене Сергею!
Прекрасная автошкола , всем рекомендую !!!</p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className='reviewsVkDiv'>
              <div className='reviewsVkHeader'>
                <a href='https://vk.com/kseniya_h89'>
                  <img className='reviewsVkImg' src='https://pp.userapi.com/c638618/v638618639/51d09/jdm_xrem924.jpg'/>
                </a>
                <a className='reviewsA' href='https://vk.com/kseniya_h89'>
                  <p className='reviewsVkName'>Ксения Никитина</p>
                </a>
                <a className='reviewsA' href='https://vk.com/maxautoschool?w=wall154421750_1062'>
                  <p className='reviewsVkDate'>4 фев 2015</p>
                </a>
              </div>
              <p className='reviewsVkText'>Спасибо большое Вашей автошколе ! Экзамен был сдан с первого раза, права получены! А на душе одновременно и радость от победы и грусть от расставания с автошколой. Максим,тебе отдельное спасибо за интересное и легкое в понимании объяснение ПДД! Так же спасибо за советы, терпение, за навыки которые я приобрела и всегда хорошее настроение на практических занятиях)!
Желаю Вашей школе побольше легко обучаемых учеников и скорейшего расширения!</p>
            </div>
            <div className='reviewsVkDiv'>
              <div className='reviewsVkHeader'>
                <a href='https://vk.com/julikasatkina'>
                  <img className='reviewsVkImg' src='https://pp.userapi.com/c637923/v637923148/5927a/GyIInD860E0.jpg'/>
                </a>
                <a className='reviewsA' href='https://vk.com/julikasatkina'>
                  <p className='reviewsVkName'>Юля Касаткина</p>
                </a>
                <a className='reviewsA' href='https://vk.com/maxautoschool?w=wall154421750_1070'>
                  <p className='reviewsVkDate'>5 фев 2015</p>
                </a>
              </div>
              <p className='reviewsVkText'>Хочу выразить большую благодарность вашей автошколе за полученный опыт и навыки вождения. Особенно хочу поблагодарить моего инструктора Максима Долматова, всегда объяснял всё доступно, чётко и ясно. Экзамен сдала с первого раза, и хочу сказать всем кто сейчас учиться вождению, либо только планирует пойти учиться, что вы не ошиблись если выбрали эту автошколу, здесь вы приобретёте всё, что необходимо вам в будущем на дорогах, начиная с теории и заканчивая вождением авто. Цените каждый момент в автошколе, ведь время пролетит быстро, а все эмоции которые испытываешь в начале, уже никогда потом не испытать. Еще раз огромное спасибо!</p>
            </div>
          </Grid>
        </Grid>
    );
  }
}

export default Reviews;

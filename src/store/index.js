import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: '',
    //メタ情報
    metas: {
      title: '',
      discription: ''
    },
    //indexページのセクション
    sections: [
      { image: 'img_01.jpg', alt: 'AMAZON GIFT CARD PRESENT' },
      { image: 'img_02.jpg', alt: 'QUO CARD Pay PRESENT' },
      { image: 'img_03.png', alt: 'QuoカードPay ¥50,000対象車種 MIRAI' },
    ],
    //入力項目情報
    users: [
      { slug: 'date', title: '希望日', type: 'date', question: 'ご希望の日にちを選んでください。', answer: '2021.07.01', note: '', required: true },
      { slug: 'name', title: 'お名前', type: 'text', question: 'お名前を入力してください。', answer: '田中 太郎', note: '', required: true },
      { slug: 'mail', title: 'メールアドレス', type: 'text', question: 'メールアドレスを入力してください。', answer: 'test@test.com', note: '※ドメイン指定してください。', required: true },
      { slug: 'tel', title: '電話番号', type: 'text', question: '電話番号を入力してください。', answer: '090-1234-5678', note: '', required: true },
      { slug: 'job', title: 'ご職業', type: 'select', question: 'ご職業を選択してください。', answer: '医師', note: '', required: false, selects: ['医師', '弁護士', '公務員', '会社員', '会社経営', 'その他'] },
      { slug: 'buy', title: '購入形態', type: 'select', question: '購入形態を選択してください。', answer: '現金', note: '', required: false, selects: ['現金', 'ローン', 'リース'] },
      { slug: 'time', title: '購入検討時期', type: 'select', question: '購入検討時期を選択してください。', answer: '1ヶ月以内', note: '', required: false, selects: ['医師', '弁護士', '公務員', '会社員', '会社経営', 'その他'] },
    ],
    //カスタマイズ情報
    settings: {
      index: {
        note: {
          flag: true,
          title: '',
          text: '実写のデザインとは異なります。ご希望の日程にご指定の試乗車がご用意できない場合がございます。'
        },
        agree: {
          flag: false,
          title: '個人情報について',
          text: '当キャンペーンについて、お客様のお名前、住所、生年月日、性別、お電話番号、Eメールアドレスといった個人情報をご提供いただきます。'
        }
      },
      thanks: {
        title: 'お問い合わせいただきありがとうございます',
        text: '2営業日以内に担当者よりご連絡差し上げます。1週間以上経ってもお返事がない場合は、お手数ですが下記よりご連絡くださいませ。',
        mail: 'client@sample.com',
        tel: '03-1234-5678'
      }
    },
    //レイアウト情報
    layouts: {
      thema: 'black',
    }
  },
  getters: {
    keyword: state => state.keyword
  },
  mutations: {
    setKeyword: function(state, keyword) {
      state.keyword = keyword
    },
  },
  actions: {
    getKeyword: function({ commit }, keyword) {
      commit('setKeyword', keyword)
    },
  },
  modules: {},
});

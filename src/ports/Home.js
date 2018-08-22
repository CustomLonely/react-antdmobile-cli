export default {
    data: {
      id: 33,
    },
    //我的首页
    userindex: params => {
      return window.api.post ('myHomePage', {body: params});
    }
  };
  
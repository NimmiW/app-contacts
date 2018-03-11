import {WebAPI} from './web-api';

export class Test{
  static inject = [WebAPI];

  constructor(){
    this.message = "Testing message.";
  }

  /*configureRouter(config, router){
    config.title = 'Test';
    config.map([
      { route: 'love',          moduleId: 'love',           title: 'Love'}
    ]);

    this.router = router;
  }*/
}

import Animal from './Animal';

export default class Cat extends Animal {
    constructor(args) {
      super(args);
      this.name = args.name;
    }

    pop() {
      console.log('the cat is here!');
    }
}

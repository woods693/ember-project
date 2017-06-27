export default function(){
  this.transition(
    this.fromRoute('transition1'),
    this.toRoute('transition2'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}

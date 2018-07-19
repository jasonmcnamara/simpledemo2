import 'babel-polyfill';
import '../src/main.css';
import popstatehandler from '../src/popstatehandler/popstatehandler';
import router from '../src/router/router';
import toolbar from '../src/toolbar/toolbar';

const obj = {};

obj.body = document.querySelector('body');

const thetoolbar = new toolbar();

thetoolbar.maketoolbar(obj.body);

window.addEventListener('click', () => {
    const drawer = document.querySelector('.showsidedrawer');
    if(drawer) {
        drawer.classList.remove('showsidedrawer');
    }
})

const layout = document.createElement('div');
layout.className += ' layout';
obj.body.appendChild(layout);

popstatehandler();

router();










// const screenwidth = document.createElement('span');
// screenwidth.textContent = window.innerWidth;

// const innerWindowFunc = () => {
//     screenwidth.textContent = window.innerWidth;
//     layout.textContent = window.innerWidth+lorem;
// }

// const lorem = '\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor enim auctor eros finibus, at bibendum ligula cursus. Nam sed mollis est. Donec posuere orci non metus vulputate convallis. Aliquam lacus lacus, accumsan ac pretium eu, posuere sit amet odio. Aenean vel odio vulputate, varius nibh et, lobortis tortor. Donec non aliquam odio. Fusce sit amet eros eu purus ornare bibendum auctor non nulla. Nam fermentum rhoncus ipsum, eu molestie sem condimentum in. Sed augue mi, sollicitudin at cursus eu, efficitur nec orci. Donec mattis augue vel risus lacinia, eget suscipit arcu tincidunt. Integer facilisis sagittis laoreet. Nullam ullamcorper ligula vitae mattis placerat. Maecenas vel nunc viverra enim congue rutrum blandit a sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin varius aliquet nisi sed ornare. Suspendisse et pretium est. Aenean efficitur nisl sit amet tellus ultricies rutrum. Nam quis sodales elit. In lobortis hendrerit dolor, vel condimentum velit laoreet sed. Curabitur porta ornare enim sit amet scelerisque. Fusce pretium laoreet nisl in semper. Suspendisse potenti. Praesent ac tristique neque, at feugiat ante. Donec congue nisl non lorem iaculis, id tincidunt ipsum semper. Aenean suscipit accumsan mollis. \n\nEtiam quis elementum odio. Vestibulum condimentum accumsan sapien, quis feugiat enim fermentum eget. Donec sit amet ornare dui. In et metus enim. Sed sit amet semper tortor, a vulputate tellus. Pellentesque dapibus aliquam ullamcorper. Cras varius, metus suscipit pulvinar pharetra, lacus mi varius odio, quis vulputate ex lorem nec nisl. In id diam lectus. Fusce ac efficitur elit. Phasellus sodales dignissim tellus non ultricies. Ut eros est, porta nec nisl eu, vulputate malesuada risus. In pulvinar fringilla nisi a vulputate. Pellentesque mattis nunc varius massa facilisis auctor. Fusce finibus ut turpis id varius. Integer tempor vulputate pellentesque. Sed sit amet purus pellentesque, pharetra nulla eu, imperdiet sem. \nPellentesque interdum metus at blandit suscipit. Morbi facilisis tortor nulla, a ultrices quam efficitur vel. Donec ornare orci eu metus maximus, in aliquam ligula lacinia. Proin tincidunt sem posuere lorem placerat, a pellentesque lacus dignissim. Sed a justo semper eros faucibus finibus quis eu sapien. Etiam ultrices facilisis nisi eget imperdiet. Vivamus ut gravida nulla, ac sodales ante. Sed ultricies fermentum lobortis. Praesent faucibus massa in feugiat varius. Nullam venenatis dapibus rutrum. \nMaecenas sit amet fermentum enim. Morbi at sodales eros. Quisque ultricies dui commodo ante congue mattis vel at mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sollicitudin laoreet massa et convallis. Nullam vestibulum odio quis libero sodales, ullamcorper rutrum ipsum tempus. Aliquam erat volutpat. Cras condimentum ultricies odio, ut vestibulum urna accumsan sed. Vivamus lacus ipsum, efficitur eu rutrum vitae, pulvinar a sem. Vivamus at dapibus lectus, malesuada dignissim lorem. Fusce imperdiet, libero a faucibus accumsan, augue magna porttitor tortor, eu rhoncus neque enim eu magna. \nProin sodales interdum nulla fringilla congue. Aenean blandit dolor et justo varius, a scelerisque ante pulvinar. Donec posuere leo risus, sit amet lobortis nisl imperdiet vitae. Nullam consectetur nunc nisi. Nunc imperdiet quam eu aliquet varius. Donec aliquam tellus id vestibulum efficitur. Nulla facilisi. \nMaecenas tincidunt tellus ut bibendum tempus. Aliquam rhoncus risus nec urna efficitur elementum. Nunc dapibus felis risus, eget egestas tortor iaculis in. Donec metus metus, semper nec laoreet eu, luctus vel leo. Sed ac condimentum diam, in porttitor orci. Quisque eget lobortis turpis. Praesent ultricies malesuada tristique. Pellentesque ac finibus tortor. Aenean lorem massa, euismod sed mi ut, egestas consectetur nunc. Aenean bibendum eu augue scelerisque tincidunt. Curabitur luctus dapibus cursus. Duis porttitor varius risus, in egestas arcu suscipit quis. \nNunc dolor elit, rutrum et nisi sit amet, viverra vehicula enim. Nulla aliquam ligula eu felis varius, ut convallis augue ultricies. Sed cursus auctor enim interdum tincidunt. Nullam finibus vestibulum ligula vel aliquet. Donec efficitur dolor magna, id congue nulla imperdiet nec. Nullam gravida dapibus arcu, id lacinia nisi. In hac habitasse platea dictumst. Nunc non dui rhoncus, dictum lorem sit amet, euismod est. Nullam pulvinar, magna in iaculis dictum, magna lacus dignissim felis, non viverra dui tellus quis orci. Aliquam ante ipsum, egestas in arcu et, bibendum scelerisque lorem. Quisque mattis at tortor id posuere. Nulla mi lectus, imperdiet sed nunc eget, ultricies porta elit. \nMaecenas faucibus felis eu ante rutrum elementum. Maecenas elementum feugiat semper. Phasellus viverra vulputate lectus. Nulla sed nisi sem. In augue ligula, dapibus a pretium vel, sagittis finibus leo. Nunc sagittis elit nec risus aliquet molestie. Vestibulum vitae erat sem. Aenean ipsum neque, suscipit ut fermentum id, pellentesque id lorem. Curabitur tincidunt tortor sit amet justo faucibus tristique. Nam malesuada velit sit amet dui suscipit tincidunt. Nullam aliquet lacus vitae urna aliquam tincidunt. Aliquam aliquam non tortor quis mattis. \nMauris consequat velit nec dui commodo, rutrum ullamcorper felis scelerisque. Cras fermentum egestas euismod. Vivamus quis iaculis enim, et commodo leo. Duis nisl enim, ullamcorper cursus interdum et, laoreet eget odio. Aenean imperdiet magna et quam gravida commodo. Sed consectetur nulla cursus, mollis mi quis, fringilla augue. Curabitur malesuada tortor sit amet luctus rutrum. \nMorbi cursus pretium lobortis. Sed vestibulum fermentum risus et posuere. Maecenas sollicitudin sollicitudin vehicula. Duis aliquet finibus lorem, ac dapibus orci imperdiet id. Sed quis ligula diam. Nullam porta cursus porta. Donec elementum dapibus luctus. Praesent blandit sapien vitae ex pharetra, a laoreet dui congue. Suspendisse sed dui ac erat hendrerit laoreet vitae eu tortor. Maecenas scelerisque ante enim, vitae convallis velit semper gravida. \nNulla porttitor nisi consequat, tincidunt lacus sit amet, viverra urna. Praesent quis tempor diam. Nulla accumsan finibus sollicitudin. Vestibulum ut ex ac dui gravida lacinia. Mauris congue ultricies magna. Etiam id elit justo. Aenean sed odio sit amet magna accumsan pellentesque quis gravida sapien. Vestibulum at orci nisl. Nam volutpat gravida facilisis. Fusce ac sollicitudin erat. Integer et ligula sed nunc facilisis facilisis. Duis et libero convallis, blandit nunc eu, laoreet arcu. Vestibulum mattis ultricies pretium. Nullam efficitur augue sit amet magna aliquam, quis congue risus cursus. Nulla facilisi. Integer eu lorem tempus, hendrerit velit ut, maximus est. \nDonec hendrerit eget quam nec vulputate. Morbi fermentum lectus in aliquam eleifend. Donec vulputate at nisl vel pulvinar. Etiam semper urna nec aliquam luctus. Duis et cursus justo, quis cursus augue. Morbi ut odio eu libero pretium auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus nisl non ullamcorper posuere. Duis pulvinar aliquam porttitor. Vivamus rutrum vestibulum sem at scelerisque. Sed quis tincidunt enim, at tincidunt sem. Vivamus id elementum urna, eget posuere ex. Quisque feugiat eros justo, vel elementum mi maximus ut. \nSed tempus lectus dui, vitae tempor velit molestie ut. Aenean mollis sodales elit, ut iaculis odio lobortis id. Donec eros tortor, rhoncus ac quam vitae, sagittis elementum justo. Pellentesque in fringilla quam, non vulputate dolor. Suspendisse potenti. Fusce sed dictum justo. Donec ac nisi id odio dapibus faucibus vitae ut nibh. Sed ut dignissim leo, eu commodo enim. Morbi at sem molestie, tempus tortor a, ultrices neque. Ut nec odio quam. Curabitur quis risus pellentesque, pulvinar sem nec, maximus justo. Sed dignissim tincidunt lacinia. Nulla sem elit, lacinia sed ultricies consectetur, consectetur a nulla. Proin sodales iaculis orci, ut aliquet neque. \nSuspendisse potenti. Praesent iaculis eros tempor nibh ullamcorper, vel feugiat eros tempus. Nam mollis enim eu sem porttitor, ut bibendum nibh tempor. Duis posuere commodo enim, non rutrum nulla condimentum a. Pellentesque arcu lorem, bibendum nec pellentesque id, tempor id nisl. Quisque non dictum ipsum. Mauris bibendum auctor tristique. Nam id quam et dui convallis tempor nec sagittis lectus. Proin vehicula, tellus vel molestie posuere, dui urna feugiat metus, ut porta ipsum libero eu magna. Sed nec augue sit amet nibh rhoncus vehicula. Sed convallis et mauris ut vestibulum. \nNam eleifend tortor dolor, a feugiat leo vulputate nec. In quis tellus eget lacus tristique dapibus eget eget tortor. Maecenas blandit enim nec elit faucibus, scelerisque aliquam tortor maximus. Nulla bibendum, magna eget interdum ultricies, arcu nunc imperdiet ante, id porttitor mi augue sit amet metus. Praesent enim lacus, interdum non tellus gravida, vestibulum pretium enim. Sed hendrerit erat nec dui imperdiet finibus. Proin eget rutrum urna. Donec egestas feugiat nisi eget maximus. Duis convallis elit id orci posuere, sit amet egestas orci aliquam. Duis non tortor vitae purus gravida rhoncus accumsan id nunc. Morbi scelerisque posuere vestibulum. Etiam ac laoreet leo, ac facilisis neque. Fusce in sapien venenatis, dictum urna in, iaculis ligula. Sed tincidunt ullamcorper ex eget rutrum. Quisque eget tellus rutrum, egestas metus a, pretium massa. \nCurabitur porta enim nec ligula viverra, tristique finibus eros tempus. Suspendisse et lectus elementum, finibus dolor vitae, pretium dolor. Sed ut tincidunt ligula. Vestibulum rutrum rhoncus porttitor. Etiam posuere, justo a maximus fermentum, dolor sem iaculis metus, in pharetra turpis metus quis orci. In quis urna ipsum. Vivamus sed dignissim ligula. Morbi lacinia consectetur odio, id cursus elit gravida ut. Pellentesque semper risus non ligula venenatis, quis molestie leo elementum. Phasellus consectetur a orci in elementum. \nProin in bibendum erat. Maecenas lorem purus, lacinia vel ultricies nec, rhoncus id purus. Integer quis turpis nec nunc faucibus consequat sit amet sed ante. Curabitur maximus, eros sed porta facilisis, sem nisl sodales dolor, feugiat lobortis ligula augue ut elit. Suspendisse potenti. Integer egestas auctor leo, et pharetra velit pretium et. Integer egestas ornare finibus. Maecenas et aliquam quam. Nunc mollis erat eget dui commodo, id placerat dolor volutpat. Maecenas non interdum velit. \nUt vitae ipsum tincidunt, consectetur quam nec, faucibus ex. Curabitur commodo fermentum orci, commodo pulvinar libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum porttitor volutpat vehicula. Suspendisse potenti. Etiam eleifend, turpis quis aliquet tristique, tortor magna iaculis augue, nec scelerisque leo est vel diam. Donec viverra faucibus leo. \nSed in ligula tristique quam bibendum faucibus. Aliquam erat volutpat. Nullam id vehicula diam. Vestibulum mauris quam, vestibulum vitae faucibus a, eleifend id est. Proin fermentum neque at eros faucibus accumsan. Nulla facilisi. Fusce vitae mi finibus quam imperdiet ultrices. Praesent auctor turpis in risus rhoncus mollis. \nVestibulum venenatis lobortis mi, et congue nisl pretium eget. Phasellus non augue tempor justo elementum malesuada. Morbi fringilla condimentum lorem, non cursus elit luctus in. Curabitur efficitur sagittis sem, id pellentesque ante. Maecenas rhoncus ligula lectus. Nunc eget felis varius, fermentum orci at, bibendum risus. Maecenas hendrerit condimentum condimentum. Aliquam mattis augue a metus suscipit, vitae dignissim ex rhoncus. Quisque imperdiet tortor quam, at tristique mi consectetur in. Ut sit amet ligula ante. Sed feugiat enim id nunc pharetra, vel imperdiet lorem placerat. Nullam faucibus velit in mi sodales, vel tincidunt ipsum facilisis. Aenean eget mollis tortor. \nDonec dapibus orci sed ante consequat auctor. Nullam elementum quis metus in tempus. Sed et ligula ac mauris mollis condimentum ac et est. Donec et tincidunt metus, a facilisis est. Nulla facilisi. Phasellus egestas mauris ac sapien bibendum viverra. Ut consectetur ornare euismod. Cras eu sapien vitae libero iaculis tempor ut non lorem. In egestas sollicitudin accumsan. Quisque varius lectus massa, nec auctor ligula efficitur eget. Sed et odio id ligula ornare dictum. Nullam nec suscipit orci. Sed pretium augue non euismod finibus. In eros diam, hendrerit vel bibendum nec, facilisis hendrerit lectus. Mauris maximus lacus eu sapien tincidunt viverra. Donec eget tellus non turpis dapibus sagittis at at nisl. \nCurabitur varius, libero nec faucibus tempor, ipsum ligula ullamcorper tellus, sit amet varius sem felis venenatis eros. Pellentesque mollis libero sit amet est volutpat, vel maximus felis ultricies. Nam viverra orci nisl. Proin porttitor augue nec lacus consectetur finibus. Mauris lobortis efficitur lacinia. Suspendisse risus ligula, dapibus sed libero eget, fermentum ornare velit. Sed ut nulla sodales, faucibus lectus nec, viverra risus. Aliquam euismod in augue ac lacinia. Curabitur egestas massa in nulla scelerisque lobortis. Pellentesque blandit purus nisi, ac fermentum tellus molestie id. Aenean suscipit ornare mattis. Etiam vel nisl eget neque vulputate aliquam. Pellentesque ultricies massa et ipsum commodo, nec pretium metus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus et tellus nec pharetra. Vestibulum consectetur cursus vestibulum. \nIn ultricies ac odio vel bibendum. Nulla nec nibh augue. Sed vestibulum odio non iaculis ultricies. Maecenas luctus nisl vel eleifend varius. Donec volutpat, sapien at maximus vulputate, felis ante pretium erat, ut laoreet massa lorem non velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet eros sed ipsum accumsan molestie. Nulla at semper sapien. Vestibulum vehicula dui ut neque eleifend varius. Vestibulum ac turpis consequat, accumsan lorem id, iaculis magna. Sed sodales felis sapien, eu vestibulum dolor dignissim sit amet. \nDuis non nisi fermentum metus pellentesque sagittis. Nulla facilisi. Aliquam erat volutpat. Cras nec tortor in est feugiat varius in at ipsum. Aenean quis mauris turpis. Fusce ut velit mollis, gravida ex at, varius risus. Aenean vel cursus ligula. Donec urna ex, molestie ac est id, vehicula sodales velit. Donec quis tincidunt neque, vitae auctor diam. Suspendisse id ultrices arcu. \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque iaculis lectus non magna tincidunt, non ornare tellus ornare. Nullam in ex id erat aliquet posuere in et felis. Nulla rhoncus a odio id rhoncus. Maecenas fermentum fringilla ultrices. Nulla pellentesque, massa quis vestibulum consectetur, diam erat finibus lectus, sit amet consequat metus augue sed nunc. Etiam ex libero, suscipit eget mattis sed, volutpat sed turpis. \nDonec nibh eros, consectetur imperdiet rutrum et, laoreet sed odio. Pellentesque luctus leo sed sollicitudin tempor. Sed enim augue, scelerisque ut mauris in, rutrum congue mauris. Etiam purus nisi, posuere vitae eros ac, laoreet elementum libero. Maecenas vestibulum diam turpis, ullamcorper gravida lacus ultricies aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ut diam nibh. Mauris sapien quam, volutpat et volutpat id, vehicula commodo sapien. Duis eleifend luctus tortor a vehicula. Nunc sapien lorem, sollicitudin et faucibus id, gravida ut metus. \nEtiam vitae libero ac augue imperdiet sollicitudin at quis ipsum. Fusce placerat eros eget rutrum blandit. Cras vitae odio rhoncus, porttitor augue a, fermentum mauris. Nunc viverra justo eget felis faucibus, vel rhoncus neque posuere. Suspendisse turpis mauris, laoreet eget turpis ac, ultrices fringilla elit. Phasellus risus felis, commodo vel ultricies sed, sodales quis justo. Suspendisse nec eleifend nisl. In nulla velit, fringilla non orci quis, facilisis porttitor lacus. Donec at massa eget urna tempor tincidunt. Aliquam eget interdum felis. \nIn iaculis lobortis ligula, ut pulvinar ipsum varius ut. Quisque nec orci consequat, luctus massa imperdiet, maximus ligula. Duis sed quam turpis. Nulla vitae enim quis sapien condimentum gravida. Ut sem libero, sodales vitae ultrices non, mollis sit amet felis. Donec dictum nunc id leo facilisis, non blandit lorem ornare. Nam non velit nibh. Suspendisse pulvinar laoreet lorem nec suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in lacus ut odio consequat accumsan. Curabitur at est euismod lorem molestie lacinia quis in mi. Fusce a nisl dui. Ut sapien augue, malesuada quis nisi nec, pellentesque porta lorem. Suspendisse vel ultrices mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \nEtiam cursus sit amet lectus sit amet posuere. Vivamus ac metus tortor. Pellentesque vitae est lectus. Etiam efficitur quam ac odio imperdiet viverra. Integer ex lorem, posuere sit amet mollis eget, ultricies eget neque. Nunc non imperdiet nunc. Sed gravida facilisis pharetra. \nVivamus elementum justo quis tellus varius, tempor imperdiet velit aliquam. Nunc ex tellus, commodo rhoncus leo eu, pulvinar tincidunt velit. Vivamus at purus aliquam, dignissim augue a, luctus arcu. Vestibulum auctor varius leo, in luctus est fringilla et. Aliquam erat volutpat. Fusce tincidunt consequat ex a sagittis. Vestibulum eu tellus ipsum. In eu varius augue. Pellentesque id mollis risus. Praesent nisi nisi, sollicitudin non ex ut, porta sagittis dui. Quisque et suscipit nisl, sed cursus urna. \nIn ullamcorper massa eros, vel commodo tellus mollis ac. Aliquam erat volutpat. Maecenas semper velit at erat dapibus, ut sagittis ligula vehicula. Integer et mauris quis sapien vestibulum aliquam. Proin elit sapien, ultrices a tristique eu, tincidunt eleifend dolor. Nam sed magna a ex finibus condimentum. Nulla facilisi. Phasellus posuere odio id sollicitudin dictum. In consequat semper turpis, id pellentesque ex fringilla nec. Donec ac lorem vitae ex tempor vulputate quis vitae turpis. Nam nisl libero, iaculis vitae nunc nec, feugiat semper arcu. Fusce at libero blandit ligula commodo tincidunt. Mauris cursus ligula non sollicitudin luctus. \nMaecenas efficitur imperdiet consequat. Aenean non porta lacus, interdum congue mi. Phasellus pharetra vel diam sit amet volutpat. Integer scelerisque lacinia condimentum. Curabitur in ex ex. Ut enim nulla, volutpat ut efficitur at, auctor id nunc. Aliquam maximus rutrum mi sed maximus. Proin efficitur, nulla sit amet dapibus malesuada, lacus dolor scelerisque metus, quis aliquam neque felis sed nisl. Nullam tellus elit, egestas at tortor ac, eleifend pulvinar leo. Nunc mattis non ex tempus efficitur. Fusce ut ipsum vitae orci varius semper in eu ipsum. \nPraesent ornare sem a blandit tincidunt. Morbi posuere quam ac malesuada blandit. Quisque in nisl ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi ipsum, auctor vitae urna eu, gravida vestibulum sapien. Phasellus vestibulum enim at gravida bibendum. Maecenas gravida ut arcu sed feugiat. Proin et ligula lectus. Mauris vestibulum ligula non facilisis dictum. Duis vitae lacus sed dolor consequat pretium eget in leo.';

// window.addEventListener('resize', innerWindowFunc);

// const layout = document.createElement('div');
// layout.className += ' layout';
// layout.textContent = window.innerWidth+lorem;

// obj.body.appendChild(layout);


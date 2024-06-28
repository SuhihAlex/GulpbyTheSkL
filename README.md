# GulpbyTheSkL
# Начало работы
Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория
git clone <this repo> Затем, находясь в корне проекта, запустите команду npm i, которая установит все находящиеся в package.json зависимости. После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку dist корневой директории):

gulp - базовая команда, которая запускает сборку для разработки, используя browser-sync

gulp build - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

gulp zip - команда собирает ваш готовый код в zip-архив.

# npm-скрипты
Вы можете вызывать gulp-скрипты через npm. Также в сборке есть возможность проверять код на соответствие валидации html.

npm run html - запускает валидатор html, запускать нужно при наличии html-файлов в папке dist.

# Работа с html
Благодаря плагину gulp-file-include вы можете разделять html-файл на различные шаблоны, которые должны храниться в папке partials. Удобно делить html-страницу на секции.

Для вставки html-частей в главный файл используйте @include('partials/filename.html')

Если вы хотите создать многостраничный сайт - копируйте index.html, переименовывайте как вам нужно, и используйте.

При использовании команды gulp build, вы получите минифицированный html-код в одну строку для всех html-файлов.

# Работа с CSS
В сборке используется препроцессор sass в синтаксисе scss.

Стили, написанные в components, следует подключать в main.scss. ВАЖНО: Обязательно удалить стили, которые написаны в main.scss для .page__body.

Чтобы подключить сторонние css-файлы (библиотеки) - положите их в папку vendor и подключите в файле _vendor.scss

Если вы хотите создать свой миксин - делайте это в папке mixins, а затем подключайте в файл _mixins.scss.

Если вы хотите использовать scss-переменные - подключите _variables.scss также в main.scss или в любое другое место, где он нужен, но обязательно удалите :root.

Для подключения css-файлов используйте директиву @import

В итоговой папке dist/css создаются два файла:
main.css - для стилей страницы,
vendor.css - для стилей всех библиотек, использующихся в проекте.

При использовании команды gulp build, вы получите минифицированный css-код в одну строку для всех css-файлов.

# Работа с JavaScript
Для сборки JS-кода используется webpack.

JS-код лучше делить на компоненты - небольшие js-файлы, которые содержат свою, изолированную друг от друга реализацию. Такие файлы помещайте в папку components, а потом импортируйте в файл _components.js

В файле vars.js должны храниться базовые переменные проекта, вроде нахождения элементов и т.д.

В файле main.js ничего менять не нужно, он сделан просто как результирующий.

Подключать сторонние библиотеки можно через npm, для этого существует файл _vendor.js. Импортируйте туда подключения.

Если какой-то библиотеки нет в npm или просто нужно подключить что-либо локальным файлом - кладите его в папку vendor и точно так же импортируйте, но уже с путем до файла.

При использовании команды gulp build, вы получите минифицированный js-код в одну строку для всех js-файлов.

# Работа с изображениями
Любые изображения, кроме favicon кладите в папку img.

Если вам нужно сделать svg-спрайт, кладите нужные для спрайта svg-файлы в папку img/svg. При этом, такие атрибуты как fill, stroke, style будут автоматически удаляться. Иные svg-файлы просто оставляйте в папке img.

При использовании команды gulp build, вы получите минифицированные изображения в итоговой папке img.

# Работа с иными ресурсами
Любые ресурсы (ассеты) проекта, под которые не отведена соответствующая папка, должны храниться в папке resources. Это могут быть видео-файлы, php-файлы (как, например, файл отправки формы), favicon и прочие.

# Типограф 
Для корректного отображения текста на странице был подключен плагин типограф, которые автоматически добавит неразрывные пробелы и иные символы, чтобы текст везде отображался по всем правилам русского языка.

# Готовые модули
В сборку постепенно добавляются готовые, часто-используемые модули под различные задачи. Ниже будет перечислен уже добавленный функционал.

Внимание! В файле functions.js описаны лишь подключения всех нужных модулей. Рекомендуется использовать все это в отдельных файлах. Например, если вам нужно создать модальное окно, создаете файл modal.js в папке components, подключаете его в файл components.js и уже в файле modal.js используете код подключения.

# Кастомный скролл
Для реализации кастомного скролла в сборку установлен плагин simplebar.js. Как его использовать:

1 Раскомментируйте строку с импортом плагина simplebar
2 Добавьте нужному блоку максимальную высоту и атрибут data-simplebar

# Слайдер
Вы можете быстро создать рабочий swiper-слайдер. Как это использовать:

1 В html вызвать сниппет g-swiper. Он создаст базовую структуру свайпер-слайдера, вам нужно добавить свой класс для свайпер-контейнера.
2 Раскомментировать строку с подключением стилей в файле vendor.scss
3 Подключить сам свайпер (код в файле functions.js) и использовать его, следуя документации.

# Анимации по скроллу
Вы можете быстро набросать анимаций по скроллу с помощью плагина. Как это использовать:

1 Подключить код библиотеки AOS.js (код в файле functions.js) и инициализировать его.
2 С помощью атрибутов из документации плагина вызывать те или иные анимации, или написать свою.

# Параллакс по скроллу
Вы можете быстро набросать параллакс элементов по скроллу с помощью плагина. Как это использовать:

1 Подключить код библиотеки rellax.js (код в файле functions.js) и инициализировать его, передав класс элемента (элементов).
2 Задать этот класс нужным элементам, а также использовать атрибуты из документации для кастомизации анимаций.

# Плавный скролл к якорям
Вы можете сделать плавный скролл к якорям, который работает даже в Safari, с помощью плагина. Как это использовать:

1 Подключить код библиотеки smooth-scroll.js (код в файле functions.js) и инициализировать его, передав селектор всех якорных ссылок.
2 Раздать всем якорным ссылкам атрибут data-scroll.

# Заключение
Спасибо всем, кто использует сборку! Если вы заметили какую-либо ошибку, пришлите пожалуйста issue с подробным описанием проблемы, я все смотрю и постараюсь решить. Спасибо!

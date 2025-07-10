// Données des événements (peut être remplacé par un appel API ou un fichier JSON)
const eventsData = [
  {
    id: 1,
    title: "Atelier CV",
    date: "2025-07-15",
    time: "14:00 - 16:00",
    location: "Salle de réunion 1",
    description: "Atelier pour apprendre à rédiger un CV efficace et adapté au marché du travail actuel.",
    type: "Atelier",
    color: "var(--event-color-1)"
  },
  {
    id: 2,
    title: "Entretiens individuels",
    date: "2023-11-20",
    time: "09:00 - 12:00",
    location: "Bureau des conseillers",
    description: "Entretiens individuels avec les conseillers pour faire le point sur votre parcours.",
    type: "Rendez-vous",
    color: "var(--event-color-2)"
  },
  {
    id: 3,
    title: "Forum des métiers",
    date: "2023-11-22",
    time: "10:00 - 17:00",
    location: "Espace polyvalent",
    description: "Découverte des différents métiers et rencontres avec des professionnels.",
    type: "Événement",
    color: "var(--event-color-3)"
  },
  {
    id: 4,
    title: "Formation numérique",
    date: "2023-11-25",
    time: "13:30 - 16:30",
    location: "Salle informatique",
    description: "Formation aux outils numériques essentiels pour la recherche d'emploi.",
    type: "Formation",
    color: "var(--event-color-4)"
  },
  {
    id: 5,
    title: "Réunion d'information",
    date: "2023-11-28",
    time: "18:00 - 20:00",
    location: "Salle principale",
    description: "Présentation des nouveaux programmes et services de la mission locale.",
    type: "Réunion",
    color: "var(--event-color-1)"
  },

];

// Variables globales
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Éléments du DOM
const calendarDays = document.getElementById('calendar-days');
const currentMonthElement = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));

// Initialisation du calendrier
function initCalendar() {
  updateCalendar();

  // Écouteurs d'événements
  prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    updateCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    updateCalendar();
  });
}

// Mettre à jour le calendrier
function updateCalendar() {
  // Mettre à jour le titre du mois
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Calculer le premier jour du mois et le nombre de jours dans le mois
  const firstDay = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Calculer le jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
  let firstDayOfWeek = firstDay.getDay();
  // Ajuster pour que la semaine commence le lundi (1)
  firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  // Calculer le nombre de jours du mois précédent à afficher
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // Effacer le calendrier actuel
  calendarDays.innerHTML = '';

  // Ajouter les jours du mois précédent
  for (let i = 0; i < firstDayOfWeek; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day other-month';
    day.textContent = prevMonthDays - firstDayOfWeek + i + 1;
    calendarDays.appendChild(day);
  }

  // Ajouter les jours du mois actuel
  const today = new Date();
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';

    // Vérifier si c'est aujourd'hui
    if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      day.classList.add('today');
    }

    // Numéro du jour
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = i;
    day.appendChild(dayNumber);

    // Ajouter les événements pour ce jour
    const currentDateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const dayEvents = eventsData.filter(event => event.date === currentDateStr);

    dayEvents.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.className = 'event';
      eventElement.style.backgroundColor = `${event.color}20`;
      eventElement.style.borderLeft = `3px solid ${event.color}`;
      eventElement.innerHTML = `
                        <span class="event-dot" style="background-color: ${event.color}"></span>
                        ${event.title}
                    `;

      // Ajouter un gestionnaire d'événements pour afficher les détails
      eventElement.addEventListener('click', () => showEventDetails(event));

      day.appendChild(eventElement);
    });

    calendarDays.appendChild(day);
  }

  // Calculer le nombre de jours du mois suivant à afficher
  const totalDaysDisplayed = firstDayOfWeek + daysInMonth;
  const nextMonthDaysToShow = totalDaysDisplayed <= 35 ? 35 - totalDaysDisplayed : 42 - totalDaysDisplayed;

  // Ajouter les jours du mois suivant
  for (let i = 1; i <= nextMonthDaysToShow; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day other-month';
    day.textContent = i;
    calendarDays.appendChild(day);
  }
}

// Afficher les détails de l'événement dans une modal
function showEventDetails(event) {
  document.getElementById('event-title').textContent = event.title;
  document.getElementById('event-date').textContent = formatDate(event.date);
  document.getElementById('event-time').textContent = event.time;
  document.getElementById('event-location').textContent = event.location;
  document.getElementById('event-type').textContent = event.type;
  document.getElementById('event-type').style.backgroundColor = event.color;
  document.getElementById('event-description').textContent = event.description;

  eventModal.show();
}

// Formater la date en français
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

// Initialiser le calendrier au chargement de la page
document.addEventListener('DOMContentLoaded', initCalendar);


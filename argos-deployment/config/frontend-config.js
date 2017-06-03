const config = {
	projectName: "Bosch Thermotechnik Early Warning Dashboard",
	useBackendMock: false,
	basename: '${BASENAME}',
	backendRESTRoute: "${HOST}/api",
	backendWebSocketURL: "${WEBSOCKET_HOST}/notifications",
	enableCaching: true,
	language: "de",
	colors: {
		primaryDark: "#000051",
		primaryDarkAlpha: "rgba(0, 0, 81, 0.2)",
		primary: "#1a237e",
		primaryLight: "#534bae",
		accent: "#C99700",
		accentLight: "#ffc107",
		text: "#424242",
		textAlternate: "#ffffff",
		border: "#e0e0e0",
		toggleOff: '#9E9E9E',
		error: "#B71C1C",
		success: "#558B2F"
	},
	descriptions: {
        textNumberOfEvents: "Anzahl von Events",
        exampleQuery: "INSERT INTO NewEventType SELECT * FROM FeedbackEventType",
        queryInputFieldHint: "Esper EPL Anfrage",
        queryDescriptionInputFieldHint: 'Beschreibung der Anfrage',
        addMapping: "Zuordnung hinzufügen",
		toggleChildrenEvents: "Events vo Kindern anzeigen?",
		selectEntityTypeHint: "Entitätstyp auswählen",
		selectEventTypeHint: "Eventtyp auswählen",
		selectTargetStatusHint: "Zielstatus, leer lassen, wenn keine Statusänderung vorliegt.",
		selectEntityTypeAttributeHint: "Entitätstyp Attribut auswählen",
		selectEventTypeAttributeHint: "Eventtyp Attribut auswählen"
	},
	messages: {
        notFound: "Error 404. Die angeforderte Seite existiert nicht.",
        noEventTypes: "Keine Eventtypen",
		deleteQueryMessage: "Wollen Sie diese Query wirklich löschen?",
		deleteEventTypeMessage: "Wollen Sie diesen Eventtypen wirklich löschen?",
		deleteEntityMappingMessage: "Wollen sie diese Zuordnung wirklich löschen?",
		deletedQueryMessage: "Query wurde gelöscht.",
		deletedEventTypeMessage: "Eventtyp wurde gelöscht.",
		deletedEntityMappingMessage: "Zuordnung wurde gelöscht.",
		createdQueryMessage: "Query wurde gespeichert.",
		createdEventTypeMessage: "Eventtyp wurde gespeichert.",
		createdEntityMappingMessage: "Zuordnung wurde gespeichert.",
		updatedQueryMessage: "Query wurde aktualisiert.",
		updatedEventTypeMessage: "Eventtyp wurde aktualisiert",
		updatedEntityMappingMessage: "Zuordnung wurde aktualisiert",
		requiredFieldMessage: 'Bitte füllen Sie dieses Feld aus.'
	},
    statuses: [
        {
            name:"Keine Fehler",
            color: "#4CAF50",
            colorLight: '#81C784'
        },
        {
            name:"Warnung",
            color: "#FFBF00",
            colorLight: "#F5DA81"
        },
        {
            name:"Error",
            color: "#E53935",
            colorLight: "#E57373"
        },
        {
            name:"UNDEFINED",
            color: "#757575",
            colorLight: "#BDBDBD"
        },
    ],
    eventTableChunkSize: 50,
	notificationDisplayDuration: 7500,
};

export default config;

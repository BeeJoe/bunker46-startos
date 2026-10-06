import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:6',
  releaseNotes: {
    en_US: `Updated Bunker46 to the latest upstream build. The server now survives transient relay crashes and adds a restart policy for improved resilience. See the upstream changes: https://github.com/dsbaars/bunker46/compare/387d8a6f7b7d5b44ba5a414ed59e96d0e7dd4d89...1a9c6c3d36d48e4c48b5ea47347fec29b206cdb3.

- Enable Registrations and Disable Registrations each ask for confirmation before running, saying who can sign up afterwards and that Bunker46 restarts.
- Reset Account Password asks you to pick the account whose password it replaces.`,
    es_ES: `Se actualizó Bunker46 a la última compilación de origen. El servidor ahora resiste caídas transitorias de los relés y añade una política de reinicio para mayor resiliencia. Consulte los cambios de origen: https://github.com/dsbaars/bunker46/compare/387d8a6f7b7d5b44ba5a414ed59e96d0e7dd4d89...1a9c6c3d36d48e4c48b5ea47347fec29b206cdb3.

- Habilitar registros y Deshabilitar registros piden confirmación antes de ejecutarse, indicando quién podrá registrarse después y que Bunker46 se reinicia.
- Restablecer contraseña de la cuenta le pide elegir la cuenta cuya contraseña reemplaza.`,
    de_DE: `Bunker46 wurde auf den neuesten Upstream-Build aktualisiert. Der Server übersteht nun vorübergehende Relay-Abstürze und erhält eine Neustart-Richtlinie für höhere Ausfallsicherheit. Siehe die Upstream-Änderungen: https://github.com/dsbaars/bunker46/compare/387d8a6f7b7d5b44ba5a414ed59e96d0e7dd4d89...1a9c6c3d36d48e4c48b5ea47347fec29b206cdb3.

- „Registrierungen aktivieren“ und „Registrierungen deaktivieren“ fragen vor der Ausführung nach einer Bestätigung und nennen, wer sich danach registrieren kann und dass Bunker46 neu startet.
- „Kontopasswort zurücksetzen“ fordert Sie auf, das Konto zu wählen, dessen Passwort ersetzt wird.`,
    pl_PL: `Zaktualizowano Bunker46 do najnowszej wersji upstream. Serwer przetrwa teraz przejściowe awarie przekaźników i dodaje politykę restartu dla większej odporności. Zobacz zmiany upstream: https://github.com/dsbaars/bunker46/compare/387d8a6f7b7d5b44ba5a414ed59e96d0e7dd4d89...1a9c6c3d36d48e4c48b5ea47347fec29b206cdb3.

- „Włącz rejestracje” i „Wyłącz rejestracje” proszą o potwierdzenie przed uruchomieniem, informując, kto będzie mógł się później zarejestrować i że Bunker46 zostanie ponownie uruchomiony.
- „Zresetuj hasło konta” prosi o wybranie konta, którego hasło zostanie zastąpione.`,
    fr_FR: `Bunker46 a été mis à jour vers la dernière version amont. Le serveur survit désormais aux pannes transitoires des relais et ajoute une politique de redémarrage pour une meilleure résilience. Voir les changements amont : https://github.com/dsbaars/bunker46/compare/387d8a6f7b7d5b44ba5a414ed59e96d0e7dd4d89...1a9c6c3d36d48e4c48b5ea47347fec29b206cdb3.

- Activer les inscriptions et Désactiver les inscriptions demandent une confirmation avant de s'exécuter, en indiquant qui pourra s'inscrire ensuite et que Bunker46 redémarre.
- Réinitialiser le mot de passe du compte vous demande de choisir le compte dont le mot de passe est remplacé.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

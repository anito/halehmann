<?php
foreach ($notices as $key => $notice) {
//    if (in_array($key, $dismissed_notices)) {
//        continue;
//    }
    ?>
    <div class="<?php echo $notice['class']; ?>" data-key="<?php echo $key; ?>">
        <p>
            <div id="<?php echo $key; ?>" style="float:left;mmargin-top:3px;">Loading...</div>
            <div id="opt-button-wrapper" style="float:right">
                <i id="opt-db-saving" class="wp-menu-image dashicons-before dashicons-cloud is-saving hide" style="vertical-align: bottom; margin-right: 10px; display: inline-flex;"></i>
                <button id="opt-dump" class="button button-primary" style="min-width: 150px;" data-type="dump" data-href="/api/mysql/mysql/dump">Jetzt sichern</button>
            </div>
            <div style="clear:both;"></div>
        </p>
    </div>
<?php } ?>

<script type="text/x-jquery-tmpl" id="timeInfoTemplate">
    {{if human}}
        Letztes <strong><a href="${url}" target="_blank">Datenbank Backup</a></strong> vor <i class="time-span">${human.total} ${human.name}</i><span> am ${created}</span>
    {{else}}
        Letztes <strong><a href="${url}" target="_blank">Datenbank Backup</a></strong>: <span style="color: #f00;"><strong>Noch kein Backup vorhanden!</strong></span>
    {{/if}}
</script>
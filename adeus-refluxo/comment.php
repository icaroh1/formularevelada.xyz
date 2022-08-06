<?php

global $_c;

if ( !$_c->photo ) {
    $photo = 'indisponivel';
    $photo_alt = 'Sem foto';
} else {
    $photo = $_c->photo;
    $photo_alt = $_c->name;
}
?>

<li class="item">
    <div class="content">
        <div class="photo">
            <span class="img">
                <img src="img/foto-<?= $photo; ?>.jpg" alt="<?= $photo_alt; ?>" class="cover-w">
            </span>
        </div>

        <div class="text">
            <p class="name">
                <strong class="link">
                    <?= $_c->name; ?>
                </strong>
            </p>

            <p class="comment">
                <?= $_c->text; ?>

                <span class="likes">
                    <span class="num"><?= $_c->number; ?></span>
                </span>
            </p>

            <p class="meta">
                <span class="link">Curtir</span> ·
                <span class="link">Comentar</span> ·
                <span class="link date"><?= $_c->date; ?></span>
            </p>
        </div>
    </div>

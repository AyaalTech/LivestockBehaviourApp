<template>
    <div class="info-page">
        <h3>Справка об аномальном поведении куриц</h3>

        <div class="flex flex-column gap-3">
            <!-- Нормальное поведение -->
            <Fieldset legend="🟩 Нормальное поведение" toggleable>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <Panel header="Питьё (Drinking)">
                            Признак нормального состояния. Отклонения могут свидетельствовать о дегидратации или
                            заболевании.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Кормление (Feeding)">
                            Регулярное питание — показатель здоровья. Отказ от еды является признаком отклонения.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Чистка себя (Self Preening)">
                            Нормальное поведение. Выщипывание у себя перьев может быть визуально схожим в чисткой.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Чистка друг друга (Attended Preening)">
                            Проявление социального взаимодействия. Характерно для спокойной, здоровой группы.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Песочная ванна (Sand Bath)">
                            Естественный способ очищения от паразитов. Отсутствие может указывать на стресс или
                            заболевание.
                        </Panel>
                    </div>
                </div>
            </Fieldset>

            <!-- Пограничное / стрессовое поведение -->
            <Fieldset legend="🟨 Пограничное и стрессовое поведение" toggleable>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <Panel header="Бег (Running)">
                            Возможная реакция на испуг, громкие звуки или вмешательство человека.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Взмахи крыльями (Wing Flapping)">
                            Может быть нормальной активностью, но частые или резкие движения — признак беспокойства.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Расправление крыльев (Wing Stretching)">
                            Слишком частое повторение может указывать на дискомфорт.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Вытягивание лап (Leg Stretching)">
                            Иногда норма, но может быть связано с судорогами или болезнями.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Прогулка (Walking)">
                            Обычное поведение. Однако шаткая походка — тревожный симптом.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Необычное поведение (Abnormal)">
                            Изоляция, неестественные позы, неподвижность — признаки возможного стресса или болезни.
                        </Panel>
                    </div>
                </div>
            </Fieldset>

            <!-- Аномальное поведение -->
            <Fieldset legend="🟥 Аномальное поведение" toggleable>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <Panel header="Драка (Fighting)">
                            Агрессия может возникать при скученности, нарушении иерархии или повышенном стрессе.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Угроза / агрессия (Menacing)">
                            Часто предшествует драке. Характерна для доминирующих птиц в нестабильной среде.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Клевание (Pecking)">
                            При высокой частоте может приводить к травмам.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Открытый клюв (Breathing)">
                            Может свидетельствовать о перегреве, нехватке кислорода и болезнях.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Пригибание (Crouching)">
                            Длительное пригибание - возможный симптом заболевания.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Одновременное расправление крыльев и лап (Wing and Leg Stretching)">
                            Практически однозначный признак болезни.
                        </Panel>
                    </div>
                </div>
            </Fieldset>

            <!-- Признаки болезни -->
            <Fieldset legend="⚠️ Признаки болезней и смерти" toggleable>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <Panel header="Птичий грипп (Sick: Bird Flu)">
                            Симптомы: слабость, отёчность головы, снижение активности. Требуется срочное вмешательство.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Ньюкаслская болезнь (Sick: Newcastle)">
                            Характеризуется неврологическими симптомами — паралич, тремор, судороги. Необходимо
                            вмешательство.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Сон (Sleeping)">
                            Чрезмерная сонливость вне времени отдыха может указывать на болезнь или ослабление
                            организма.
                        </Panel>
                    </div>
                    <div class="col-12 md:col-6">
                        <Panel header="Смерть (Dead)">
                            Полное отсутствие движений. Требуется немедленное вмешательство.
                        </Panel>
                    </div>
                </div>
            </Fieldset>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BehaviorInfoPage',
}
</script>

function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Finding the intermediate solution y by taking y = Ux</h5>
        <p>Learning Objective: If L * Z = C and Then find Z.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_z_inputs = get_matrix_html(3, 1, [
        [
            `<input id='a1-utz-11' class='form-control' />`,
        ],
        [
            `<input id='a1-utz-21' class='form-control' />`,
        ],
        [
            `<input id='a1-utz-31' class='form-control' />`,
        ],
    ], 'inline-block', "25%");
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>L = ${get_matrix_html(3, 3, lower_t_mat, 'inline-block', "40%")} &nbsp; <span style='font-size: 30px;'>. C</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', "15%")}</div>
        <br>

        <h5>Form the upper triangular matrix and enter the missign elements</h5>

        <div id='ut-inp-div' style='text-align: center;'>z = ${matrix_z_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    ut_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function ut_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    let z = get_z(lower_t_mat, c);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
    mat_z = [];
    mat_z.push([z[0]], [z[1]], [z[2]]);
    console.log(mat_z);
}
function verify_matrix_ut() {
    let btn = document.getElementById('temp-btn-123');
    let inp_a;
    let inp_c;
    console.log(`matrix z =>`, mat_z);
    //for z
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-utz-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_z[i][0])) {
            alert(`incorrect value in 3 x 1 matrix for z[${i + 1}]`);
            return;
        }
    }
    btn.remove();
    render_z();
    activity3();
}
function render_z() {
    let div = document.getElementById('ut-inp-div');
    div.innerHTML = `z = ${get_matrix_html(3, 1, mat_z, 'inline-block', '20%')}`;
}
//activity2();
//# sourceMappingURL=activity2.js.map
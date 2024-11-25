function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Finding the final solution</h5>
        <p>Learning Objective: To learn how to find the intermediate solutiuon to Ux = z</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x_inputs = get_matrix_html(3, 1, [
        [
            `<input id='a1-x-11' class='form-control' />`,
        ],
        [
            `<input id='a1-x-21' class='form-control' />`,
        ],
        [
            `<input id='a1-x-31' class='form-control' />`,
        ],
    ], 'inline-block', "25%");
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>Perform back-substitution and enter the elements of the solution vector x.</h5>

        <div style='text-align: center;'>U = &nbsp; ${get_matrix_html(3, 3, uppar_t_mat, 'inline-block', "40%")} &nbsp; z = &nbsp; ${get_matrix_html(3, 1, mat_z, 'inline-block', "15%")}</div>
        <br><br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>X</span> = ${matrix_x_inputs}</div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_bs();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    set_z();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function set_z() {
    let z = [];
    z.push(mat_z[0][0]);
    z.push(mat_z[1][0]);
    z.push(mat_z[2][0]);
    mat_x = get_x(uppar_t_mat, z);
    // mat_c = [];
    // mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_bs() {
    let btn = document.getElementById('temp-btn-1234');
    let inp_c;
    console.log(`matrix x =>`, mat_x);
    //for x
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-x-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_x[i])) {
            alert(`incorrect value in 3 x 1 matrix for X[${i + 1}]`);
            return;
        }
    }
    btn.remove();
    render_x();
    alert("You have successfully completed this experiment.");
    maindiv.innerHTML = ``;
}
function render_x() {
    let div = document.getElementById('ut-inp-div');
    let x = [];
    x.push([mat_x[0]]);
    x.push([mat_x[1]]);
    x.push([mat_x[2]]);
    div.innerHTML = `<span style='font-size: 30px;'>X</span> = ${get_matrix_html(3, 1, x, 'inline-block', "20%")}`;
}
//# sourceMappingURL=activity3.js.map
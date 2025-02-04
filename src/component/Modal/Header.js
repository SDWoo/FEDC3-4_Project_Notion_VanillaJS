import { $ } from '../../lib/dom.js';

export default function Header({ $target, modalActions }) {
  const $modalHeader = document.createElement('modal-header');
  $modalHeader.className = 'modal-header';
  $target.appendChild($modalHeader);

  this.render = () => {
    $modalHeader.innerHTML = `
       <button class="full-screen-btn" id="fullScreen">
              <svg
                viewBox="0 0 16 16"
                class="openAsPageThick"
                style="
                  width: 16px;
                  height: 16px;
                  display: block;
                  fill: rgba(55, 53, 47, 0.45);
                  flex-shrink: 0;
                  backface-visibility: hidden;
                "
              >
                <path
                  d="M2.16895 7.19629C2.59277 7.19629 2.90723 6.88867 2.90723 6.45801V5.96582L2.75684 3.81934L4.35645 5.50098L6.3252 7.4834C6.46875 7.63379 6.65332 7.70215 6.85156 7.70215C7.30957 7.70215 7.6377 7.39453 7.6377 6.93652C7.6377 6.72461 7.55566 6.54004 7.41211 6.39648L5.43652 4.4209L3.74805 2.82129L5.91504 2.96484H6.44141C6.86523 2.96484 7.18652 2.65723 7.18652 2.22656C7.18652 1.7959 6.87207 1.48145 6.44141 1.48145L2.64746 1.48145C1.86816 1.48145 1.41699 1.93262 1.41699 2.71875L1.41699 6.45801C1.41699 6.88184 1.73828 7.19629 2.16895 7.19629ZM9.55176 14.6543H13.3389C14.125 14.6543 14.5762 14.2031 14.5762 13.417V9.67773C14.5762 9.25391 14.2549 8.93945 13.8242 8.93945C13.4004 8.93945 13.0859 9.24707 13.0859 9.67773V10.1699L13.2295 12.3164L11.6299 10.6348L9.66113 8.65234C9.52441 8.50195 9.33984 8.43359 9.1416 8.43359C8.68359 8.43359 8.35547 8.74121 8.35547 9.19922C8.35547 9.41113 8.43066 9.5957 8.57422 9.73926L10.5566 11.7148L12.2383 13.3145L10.0781 13.1709H9.55176C9.12793 13.1709 8.80664 13.4785 8.80664 13.9092C8.80664 14.3398 9.12109 14.6543 9.55176 14.6543Z"
                ></path>
              </svg>
            </button>
            <button class="close-btn" id="close">
              <i class="fa fa-times"></i>
            </button>
    `;
  };

  this.render();

  // 닫기 버튼 누를 시 모달 창 나가기
  $('.close-btn').addEventListener('click', () => {
    modalActions('addDocument');
  });

  $('.full-screen-btn').addEventListener('click', () => {
    modalActions('fullScreen');
  });
}

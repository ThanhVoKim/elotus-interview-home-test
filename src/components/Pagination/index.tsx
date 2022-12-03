import { NavigateBeforeIcon, NavigateNextIcon } from 'common/svg';
interface IPaginationProps {
	currentPage: number;
	onClick: (page: number) => void;
	totalPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
	currentPage,
	onClick,
	totalPage,
}) => {
	return (
		<div className="flex justify-center mt-8">
			<div className="flex gap-3 items-center">
				{currentPage > 1 && (
					<button
						className="pagination-btn"
						onClick={() => onClick(currentPage - 1)}
					>
						<NavigateBeforeIcon className="fill-current" width={20} />
					</button>
				)}

				{currentPage < 5 ? (
					<>
						{new Array(totalPage < 5 ? totalPage : 5)
							.fill('')
							.map((_, index) => (
								<button
									key={index}
									onClick={() => onClick(index + 1)}
									className={`pagination-btn ${
										currentPage === index + 1 && '!bg-primary text-white'
									}`}
								>
									{index + 1}
								</button>
							))}
						{totalPage > 5 && (
							<>
								{totalPage > 6 && <span>...</span>}
								<button
									onClick={() => onClick(totalPage)}
									className={`pagination-btn ${
										currentPage === totalPage && '!bg-primary text-white'
									}`}
								>
									{totalPage}
								</button>
							</>
						)}
					</>
				) : currentPage > totalPage - 4 ? (
					<>
						<button
							onClick={() => onClick(1)}
							className={`pagination-btn ${
								currentPage === 1 && '!bg-primary text-white'
							}`}
						>
							1
						</button>
						<span>...</span>
						{[...new Array(5)].map((_, index) => (
							<button
								key={index}
								onClick={() => onClick(totalPage - 4 + index)}
								className={`pagination-btn ${
									currentPage === totalPage - 4 + index &&
									'!bg-primary text-white'
								}`}
							>
								{totalPage - 4 + index}
							</button>
						))}
					</>
				) : (
					<>
						<button
							onClick={() => onClick(1)}
							className={`pagination-btn ${
								currentPage === 1 && '!bg-primary text-white'
							}`}
						>
							1
						</button>
						<span>...</span>
						{new Array(5).fill('').map((_, index) => (
							<button
								key={index}
								onClick={() => onClick(currentPage - 2 + index)}
								className={`pagination-btn ${
									currentPage === currentPage - 2 + index &&
									'!bg-primary text-white'
								}`}
							>
								{currentPage - 2 + index}
							</button>
						))}
						<span>...</span>
						<button
							onClick={() => onClick(totalPage)}
							className={`pagination-btn ${
								currentPage === totalPage && '!bg-primary text-white'
							}`}
						>
							{totalPage}
						</button>
					</>
				)}

				{currentPage < totalPage && (
					<button
						className="pagination-btn"
						onClick={() => onClick(currentPage + 1)}
					>
						<NavigateNextIcon className="fill-current" width={20} />
					</button>
				)}
			</div>
		</div>
	);
};

export default Pagination;
